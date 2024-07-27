<template>
  <div>
    <h1>{{ user.name }}</h1>
    <button @click="handleUpdate">Update User</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUser, updateUser } from '../services/userService';

const userId = 'some-user-id'; // Reemplaza con el ID del usuario real
const user = ref(null);

// Función para obtener el usuario
const fetchUser = async () => {
  try {
    user.value = await getUser(userId);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

// Función para actualizar el usuario
const handleUpdate = async () => {
  try {
    user.value = await updateUser(userId, { name: 'New Name' });
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};

// Obtener el usuario cuando el componente se monta
onMounted(fetchUser);
</script>

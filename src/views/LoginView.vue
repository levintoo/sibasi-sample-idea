<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { computed, ref, watch } from 'vue'
import router from '@/router'
import { validateEmail, validatePassword } from '@/lib/validators.ts'

type ValidationErrors = {
  [field: string]: string[]
}
const validationErrors = ref<ValidationErrors>({})
const isFormValid = computed(() => {
  return (
    validateEmail(form.value.email).length === 0 &&
    validatePassword(form.value.password).length === 0
  )
})
const form = ref({
  email: '',
  password: '',
})

const handleSubmit = async () => {
  const isValid = validateForm()
  if (isValid) {
    await router.push({ name: 'dashboard' })
  }
}

const validateForm = (): boolean => {
  validationErrors.value = {}
  const errors: ValidationErrors = {}

  const emailErrors = validateEmail(form.value.email)
  if (emailErrors.length) errors.email = emailErrors

  const passwordErrors = validatePassword(form.value.password)
  if (passwordErrors.length) errors.password = passwordErrors

  validationErrors.value = errors

  return Object.keys(errors).length === 0
}

watch(
  () => form.value.email,
  (newVal) => {
    const errors = validateEmail(newVal)
    if (errors.length) {
      validationErrors.value.email = errors
    } else {
      delete validationErrors.value.email
    }
  },
)

watch(
  () => form.value.password,
  (newVal) => {
    const errors = validatePassword(newVal)
    if (errors.length) {
      validationErrors.value.password = errors
    } else {
      delete validationErrors.value.password
    }
  },
)
</script>

<template>
  <div
    class="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 px-0 sm:p-6 md:p-10"
  >
    <div class="flex w-full max-w-sm flex-col gap-6">
      <Card>
        <CardHeader class="text-center">
          <CardTitle class="text-xl"> Welcome </CardTitle>
          <CardDescription> Please fill in your details to login </CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit">
            <div class="grid gap-6">
              <div class="grid gap-3">
                <Label for="email">Email</Label>
                <Input
                  autocomplete="none"
                  v-model="form.email"
                  id="email"
                  type="email"
                  placeholder="jane@doe.com"
                />
                <p
                  v-for="msg in validationErrors['email']"
                  :key="msg"
                  class="text-sm text-red-600 mt-0.5"
                >
                  {{ msg }}
                </p>
              </div>
              <div class="grid gap-3">
                <div class="flex items-center">
                  <Label for="password">Password</Label>
                </div>
                <Input
                  autocomplete="none"
                  v-model="form.password"
                  placeholder="********"
                  id="password"
                  type="password"
                />
                <p
                  v-for="msg in validationErrors['password']"
                  :key="msg"
                  class="text-sm text-red-600 mt-0.5"
                >
                  {{ msg }}
                </p>
              </div>
              <Button :disabled="!isFormValid" type="submit" class="w-full"> Login </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

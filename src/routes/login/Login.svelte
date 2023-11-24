<script lang="ts">
  import { validator } from '@felte/validator-zod';
  import { createForm } from 'felte';
  import { navigate } from 'svelte-routing';
  import { z } from 'zod';
  import { login } from '@stores/account';

  const schema = z.object({
    password: z
      .string({ required_error: 'This field is required' })
      .min(1, { message: 'This field is required' })
  });

  const { form, errors } = createForm<z.infer<typeof schema>>({
    extend: validator({ schema }),
    onSubmit: async ({ password }) => {
      try {
        await login(password);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  });
</script>

<div class="p-4">
  <h2 class="mt-4 text-center text-2xl">Welcome back!</h2>
  <form use:form class="mt-12">
    <label for="password">Password</label>
    <input name="password" class="mt-2 w-full rounded-lg p-4 outline-primary" />
    {#if $errors.password}<div class="mt-1 text-xs text-red-500">
        {$errors.password[0]}
      </div>{/if}
    <button
      class="mt-8 block w-full rounded-lg bg-btn-primary py-3 text-btn-primary hover:bg-opacity-90"
      >Login</button
    >
  </form>
</div>

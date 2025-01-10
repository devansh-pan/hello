
<form class="*:rounded m-4" method="POST" action="?/login">
  <label>
    Email : 
    <input class="w-[83%] invalid:text-pink-700 rounded text-gray-900" name="email" type="email" />
  </label><br/>
  <br/>
  <label>
    Password :
    <input minlength="6" class="invalid:outline-red-600 invalid:border rounded w-[75%] text-gray-900" name="password" type="password" />
    min 6 letters
  </label><br/>
  <button class="border p-2 m-2 rounded bg-green-400 dark:bg-green-800">Login</button>
  <button class="border dark:text-gray-700 m-2 p-2 rounded bg-white" formaction="?/signup">Sign up</button>
</form>
<style>
  input,textarea,select{
    field-sizing: content;
  }
</style>
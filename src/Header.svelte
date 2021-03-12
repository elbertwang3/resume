<script>
  export let data;
  const { name, phone, email, portfolio, twitter, github } = data;
</script>

<div class="header">
  <div class="name">{name}</div>
  <div class="contact">
    <div>{phone} ● {@html email}</div>
    <div>{@html portfolio} ● {@html twitter} ● {@html github}</div>
  </div>
</div>

<style>
  .header {
    text-align: center;
    margin: 0 0 20px 0;
  }

  .name {
    font-weight: bold;
    font-size: 24px;
  }

  .contact {
    font-size: 14px;
  }
</style>

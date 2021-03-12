<script>
  // your script goes here
  export let title, data;
</script>

<div class="section">
  <div class="section-title">{title}</div>
  <div class="section-body">
    {#if Array.isArray(data)}
      {#each data as d}
        <div class="section-item">
          <div class="item-left">
            <div class="item-title">
              {#if d.employer}
                <span class="employer">{d.employer}</span>
              {/if}
              {#if d.school}
                <span class="school">{d.school}</span>
              {/if}
              {#if d.title}
                <span class="title">{d.title}</span>
              {/if}
            </div>
            {#if d.description}
              {#each d.description as d}
                <p class="copy">
                  {@html d}
                </p>
              {/each}
            {/if}
            {#if d.degrees}
              {#each d.degrees as d}
                <p class="copy">
                  {d}
                </p>
              {/each}
            {/if}
          </div>
          <div class="item-right">
            {#if d.date}
              <p class="date">{d.date}</p>
            {/if}

            {#if d.location}
              <p class="location">{d.location}</p>
            {/if}
          </div>
        </div>
      {/each}
    {:else}
      <div class="skills">
        {#each Object.keys(data) as key}
          <p class="copy">
            <span class="medium">{key}:</span>
            {data[key]}
          </p>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .section {
    margin: 0 0 10px 0;
  }
  .section-title {
    font-weight: 500;
    font-size: 14px;
    margin: 0 0 5px 0;
    color: #666;
  }

  .section-body {
    margin-left: 10px;
  }

  .section-item {
    display: flex;
    margin: 0 0 10px 0;
  }

  .item-left {
    flex: 1 1 auto;
  }

  .item-right {
    flex: 0 0 140px;
    font-size: 12px;
    text-align: right;
    line-height: 18px;
  }

  .employer,
  .school {
    font-weight: 700;
    font-size: 16px;
    margin-right: 5px;
  }

  .title {
    color: #666;
    font-size: 16px;
    font-style: italic;
  }

  .location {
    color: #666;
  }

  .date {
    font-weight: 500;
  }

  .copy {
    font-family: "Tiempos Text";
    font-size: 14px;
    line-height: 20px;
  }
</style>

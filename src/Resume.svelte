<script>
  import data from "./data/text";
  import Header from "./Header.svelte";
  import Section from "./Section.svelte";

  const { contact, work, education, skills } = data;
  console.log(data)
</script>

<div class="resume">
  <Header data={contact} />
  <Section title="Work Experience" data={work} />
  <Section title="Education" data={education} />
  <Section title="Skills" data={skills} />
</div>

<style>
  .resume {
    width: 716px;
    /* height: 792px; */
    margin: auto;
    padding: 50px;
  }
</style>

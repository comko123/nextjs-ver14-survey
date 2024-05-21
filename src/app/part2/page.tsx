function Part2() {
  return (
    <main>
      <h1>certified form</h1>
      <form>
        <article className="flex mb-5 flex-col">
          <section className="flex gap-x-2">
            <input type="email" name="email" className="bg-rose-100" />
            <input type="button" value="email" />
          </section>
          <section>
            <input type="number" className="bg-rose-100" />
          </section>
        </article>
        <article className="flex mb-5 flex-col">
          <section className="flex gap-x-2">
            <input type="number" name="phone" className="bg-rose-100" />
            <input type="button" value="phone" />
          </section>
          <section>
            <input type="number" className="bg-rose-100" />
          </section>
        </article>
        <input type="submit" value="submit" />
      </form>
    </main>
  )
}

/*peer , has , group 생성자 사용하기 */

export default Part2

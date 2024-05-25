function Part2() {
  return (
    <main className="form-page-layout">
      <h1 className="form-page-title">certified form</h1>
      <form>
        <article className="flex mb-5 flex-col gap-y-4">
          <section className="flex gap-x-2">
            <input type="email" name="email" className="bg-rose-100" />
            <input type="button" value="email" className="gradient-btn2" />
          </section>
          <section>
            <input type="number" className="bg-rose-100" />
          </section>
        </article>
        <article className="flex mb-5 flex-col gap-y-4">
          <section className="flex gap-x-2">
            <input type="number" name="phone" className="bg-rose-100" />
            <input type="button" value="phone" className="gradient-btn2" />
          </section>
          <section>
            <input type="number" className="bg-rose-100" />
          </section>
        </article>
        <input type="submit" value="submit" className="gradient-btn2" />
      </form>
    </main>
  )
}

/*peer , has , group 생성자 사용하기 */

export default Part2

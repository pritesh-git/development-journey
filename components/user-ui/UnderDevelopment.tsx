'use client'

const UnderDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Oops! 🚧</h1>
      <p className="text-lg text-muted-foreground text-center">
        This route is currently under construction!
        <br />
        It looks like the developer got lost in the code labyrinth! 🧙‍♂️
        <br />
        Please check back later; he will find their way soon!
      </p>
    </div>
  )
}

export default UnderDevelopment

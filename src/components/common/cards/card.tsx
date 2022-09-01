type CardProps = {
  children: JSX.Element[]
}

type CardTitleProps = {
  children: string
}

type CardTextProps = {
  children: JSX.Element[]
}

type CardActionsProps = {
  children: JSX.Element[]
}

function Card({ children }: CardProps) {
  return (
    <div className="rounded w-[250px] bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  )
}

function Title({ children }: CardTitleProps) {
  return <div className="p-2 text-white text-center">{children}</div>
}

function Text({ children }: CardTextProps) {
  return (
    <div className="flex justify-between items-center flex-col py-3">
      {children}
    </div>
  )
}

function Actions({ children }: CardActionsProps) {
  return <div className="flex justify-between">{children}</div>
}

Card.Title = Title
Card.Text = Text
Card.Actions = Actions

export default Card

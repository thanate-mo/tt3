import { MongoClient } from 'mongodb'

async function handler(req, res) {
  const { email, name, message } = JSON.parse(req.body)

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    res.status(422).json({ message: "Invalid input!." })
    return
  }
  // Store it in a database
  const newMessage = {
    email,
    name,
    message,
  }
  let client
  const connectionString = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.clustername}.olamnhj.mongodb.net/${process.env.database}?retryWrites=true&w=majority`;
  try {
    client = await MongoClient.connect(connectionString)
  } catch (error) {
    res.status(500).json({ message: "Could not connect to db" })
    return // not continue with the function execution
  }
  const db = client.db()
  try {
    const result = await db.collection("messages").insertOne(newMessage)
    newMessage.id = result.insertedId
  } catch (error) {
    client.close()
    res.status(500).json({ message: "Storing message failed!" })
    return // not continue with the function execution
  }
  client.close()

  res.status(201).json({
    message: "Successfully stored message!",
    message: newMessage,
  })
  return <div>contact</div>
}

export default handler

import { BookingController } from "./controllers/BookingController"
import { HouseController } from "./controllers/HouseController"
import { UserController } from "./controllers/UserController"

async function main() {
  const userController = new UserController()
  const houseController = new HouseController()
  const bookingController = new BookingController()

  // const user = await userController.create({
  //   name: 'Pedro',
  //   email: 'pedro@pedro.com'
  // })

  const house = await houseController.create({
    title: 'Studio',
    description: 'Studio Completo com banheira'
  })

  const booking = await bookingController.create({
    startDate: new Date(),
    endDate: new Date("2022-10-30"),
    houseId: '72fa3eef-82bd-4534-99b8-062c6766bfd6',
    userId: '51885289-8406-4af8-899d-583cbb19d77c',
  })

  console.log(booking)
}

main()
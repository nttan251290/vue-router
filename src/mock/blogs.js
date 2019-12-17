import faker from 'faker'

let listBlogs = []

for(let index = 0; index < 10; index++) {
  let data = {
    title: faker.lorem.paragraph(1),
    abstract: faker.lorem.paragraph(2),
    fullName: faker.name.firstName() + ' ' + faker.name.lastName()
  }

  listBlogs.push(data)
}

console.log('data = ', listBlogs)
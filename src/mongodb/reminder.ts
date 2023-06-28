import {Collection, Document, ObjectId} from "mongodb";

export interface TaskEntity {
  name: string;
  description?: string;
  remindAt: Date;
  startAt: Date;
  remindMe: boolean;
  color: {
    name: string;
    hex: string;
  };
  _id?: ObjectId;
}

export class ReminderRepository {
  collection: Collection<TaskEntity>;

  constructor(collection: Collection<TaskEntity>) {
    this.collection = collection;
  }

  public async save(taskEntity: TaskEntity) {
    const res = await this.collection.insertOne(taskEntity)
    return res.insertedId.toHexString()
  }

  public async saveAll(taskEntities: TaskEntity[]) {
    const res = await this.collection.insertMany(taskEntities, {ordered: false})
    return res.insertedIds
  }

  public async update(id: string, task: Partial<TaskEntity>) {

    const res = await this.collection.updateOne({_id: task._id}, {$set: task})
    // const res = await this.collection.updateOne({$text:{$search:'test'}}, {$set: task})
    return res.modifiedCount
  }

  public async updateAll(tasks: Partial<TaskEntity>[]) {
    const res = await this.collection.updateMany({}, {$set: tasks})
    return res.modifiedCount
  }

  public async delete(task: TaskEntity) {
    if (!task._id) throw new Error('task._id is required')
    const res = await this.collection.deleteOne({_id: task._id})
    return res.deletedCount
  }

  public async deleteAll(tasks: TaskEntity[]) {
    const res = await this.collection.deleteMany({})
    return res.deletedCount
  }

  public async findById(id: string) {

    const res = await this.collection.findOne(
      {_id: ObjectId.createFromHexString(id)})
    return res
  }

  public async findBy(id: string) {
    // https://www.mongodb.com/docs/manual/reference/operator/query/#std-label-query-selectors

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    const cursor =
      // await this.collection.find({_id: ObjectId.createFromHexString(id)})
      // await this.collection.find({name: 'descongelar el pollo'})
      await this.collection.find({startAt: {$gte: yesterday}})
    // await this.collection.find({description: {$exists: false}})
    // await this.collection.find({name: {$maxDistance: 34}})
    // await this.collection.find({name: {$regex: 'pollo'}})
    // await this.collection.find({$and: [{name: {$regex: 'pollo'}},{description: {$exists: false}}]})
    // await this.collection.find({$or: [{name: {$regex: 'pollo'}},{description: {$exists: false}}]})
    // await this.collection.find({$or: [ {$and:[{name: {$regex: 'pollo'} }]},{description: {$exists: false}}]})

    const a = {
      first_name: 'Paul',
      surname: 'Miller',
      city: 'London',
      location: [45.123, 47.232],
      cars: [
        {
          model: 'Bentley',
          year: 1973,
          value: 100000
        },
        {
          model: 'Rolls Royce',
          year: 1965,
          value: 330000
        },
      ]
    }

    while (await cursor.hasNext()) {
      const next = await cursor.next()
      console.log(next)
    }
    cursor.close()
  }


}




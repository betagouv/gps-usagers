import { EntityRepository, Repository } from "typeorm";
import { Journey } from "../entity/Journey";

@EntityRepository(Journey)
export class JourneyRepository extends Repository<Journey> {
  async findJourney() {
    return this.createQueryBuilder()
      .createQueryBuilder()
      .select("journeys")
      .from(Journey, "journeys")
      .getMany();
  }
  async findJourneyById(id: string) {
    return this.createQueryBuilder()
      .createQueryBuilder()
      .select("journeys")
      .from(Journey, "journeys")
      .where("id = :id", { id })
      .getOne();
  }
  async updateJourney(id: string, data: any) {
    return this.createQueryBuilder()
      .update(Journey)
      .set(data)
      .where("id = :id", { id })
      .returning("*")
      .execute();
  }
  async deleteJourney(id: string) {
    await this.createQueryBuilder()
      .delete()
      .from(Journey)
      .where("id = :id", { id })
      .execute();
  }
}

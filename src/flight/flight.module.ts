import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHT } from '../common/models/models';
import { FlightSchema } from './schema/flight.schema';
import { PassengerModule } from '../passenger/passenger.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGHT.name,
        useFactory: () => FlightSchema.plugin(require('mongoose-autopopulate')), 
        // to return not only id's of passenger. We can return all the passenger info
      },
    ]),
    PassengerModule,
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}

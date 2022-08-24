import { Resource} from "./model/resource";
import * as moment from 'moment'

export const RESOURCES: Resource[] = [
  {resourceIds: ["R1"], resourceSubType: 'DRIVER', originDepartureTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:11}), destinationArrivalTime: undefined},
  // {resourceIds: ["R2"], resourceSubType: 'MANAGER', originDepartureTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:12}), destinationArrivalTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:13})},
  // {resourceIds: ["R3"], resourceSubType: 'MANAGER', originDepartureTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:15}), destinationArrivalTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:16})},
  // {resourceIds: ["R2"], resourceSubType: 'DRIVER', originDepartureTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:13}), destinationArrivalTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:14})},
  {resourceIds: ["R1"], resourceSubType: 'DRIVER', originDepartureTime: undefined, destinationArrivalTime: moment.utc({year:2022, month:8, day:21, hour:11, minute:12})},
];

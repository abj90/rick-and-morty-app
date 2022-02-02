import {
  ALIVE,
  CHARACTER_ALIVE,
  CHARACTER_DEAD,
  STATUS_ICON,
} from './constants';

export function getStatusIcon(status: string): string {
  return STATUS_ICON + (status === ALIVE ? CHARACTER_ALIVE : CHARACTER_DEAD);
}

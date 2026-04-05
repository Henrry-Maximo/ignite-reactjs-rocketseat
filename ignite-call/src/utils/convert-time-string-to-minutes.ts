// timeString: 09:30
export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number);

  return (hours * 60) + minutes;
}
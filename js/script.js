function countDays() {
  const startDate = new Date(document.getElementById("startDate").value);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = currentDate.getTime() - startDate.getTime();

  // Convert milliseconds to days
  const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));

  // Calculate total months
  const totalMonths = currentDate.getMonth() - startDate.getMonth() + 12 * (currentDate.getFullYear() - startDate.getFullYear());

  // Calculate total weeks
  const totalWeeks = Math.floor(daysDifference / 7);

  // Calculate remaining days
  const remainingDays = daysDifference % 7;

  // Update total days result
  document.getElementById("totalDaysResult").textContent = daysDifference;
  document.getElementById("totalDays").querySelector("h2").textContent = `Berapa Hari Sejak  ${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
  // Update total months result
  document.getElementById("totalMonthsResult").textContent = totalMonths;

  // Update total weeks result
  document.getElementById("totalWeeksResult").textContent = totalWeeks;

  // Update remaining days result
  document.getElementById("remainingDaysResult").textContent = remainingDays;
}

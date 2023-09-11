import express from "express";

const app = express();

app.get("/api", (req, res) => {
	const { slack_name, track } = req.query;
	const currentDate = new Date();
    const utcTime = currentDate.toISOString();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = currentDate.getDay();
    if (slack_name != undefined &&  track != undefined) {
        const currentDayName = daysOfWeek[currentDayIndex];
        res.status(200).json({
					slack_name: slack_name,
					current_day: currentDayName,
					utc_time: utcTime,
					track: track,
					github_file_url: "",
					github_repo_url: "https://github.com/jopaleti/zuri.git",
					status_code: 200,
				});
    }

});

app.listen(process.env.PORT || 3000, () => {
	console.log("server is running");
});

'use client'

import Today from "@/app/common/date/today";
import MyCalendar from "@/app/component/util/calendar";
import moment from "moment"

export default function AssetPage() {

    const events = [
        {
            start: moment(Today()),
            end: moment('2024-07-31').toDate()
        }
    ]
    return (
        <div>
            <MyCalendar />
        </div>
    )
}     

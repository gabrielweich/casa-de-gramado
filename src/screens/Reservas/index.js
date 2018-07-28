import React from 'react'
import Typography from '@material-ui/core/Typography';
import { DateRangePicker, SingleDatePicker } from 'react-dates';

export default class Reservas extends React.Component {
    state = {
        data: null,
        startDate: null,
        endDate: null,
        focusedInput: null
    }
    render() {
        return (
            <div>
                <Typography variant="title" style={{ fontSize: 30, color: '#1B5E20', opacity: 1, marginTop: 20, marginLeft: 20 }}>
                    Nova Reserva
                </Typography>
                <div style={{ marginLeft: 20, marginTop: 20, padding:0, boxSizing:'border-box' }}>
                    <DateRangePicker
                        startDatePlaceholderText="Data Inicial"
                        endDatePlaceholderText="Data Final"
                        showDefaultInputIcon
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                </div>

            </div>
        )
    }
}
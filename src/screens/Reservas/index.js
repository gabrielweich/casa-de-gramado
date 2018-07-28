import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import * as actions from '../../actions/reserva'
import { DateRangePicker } from 'react-dates';
import Spinner from '../../components/Spinner'

class Reservas extends React.Component {
    state = {
        data: null,
        startDate: null,
        endDate: null,
        focusedInput: null
    }

    confirmar = () => {
        const { startDate, endDate } = this.state

        if (this.state.startDate && this.state.endDate) {
            this.props.reservar(this.props.idUsuario, startDate.format(), endDate.format())
        }
    }

    render() {
        return (
            <div>
                <Typography variant="display2" style={{ fontSize: 30, color: '#1B5E20', opacity: 1, marginTop: 20, marginLeft: 20 }}>
                    Nova Reserva
                </Typography>
                <div style={{ marginLeft: 20, marginTop: 20, display: "inline-flex", flexDirection: 'row', border: '1px solid gray', borderRadius: 5, padding: 5, flex: 0 }}>
                    <div >
                        <DateRangePicker
                            noBorder={true}
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
                    <div style={{ color: '#1B5E20', alignSelf: 'center' }}>
                        R$: 230,00
                    </div>
                    <div style={{ alignSelf: 'center', marginLeft: 20}}>
                        {this.props.loading
                            ? <Spinner />
                            : <Button onClick={this.confirmar} size="medium" style={{ color: '#1B5E20' }} >
                                Confirmar
                              </Button>
                        }

                    </div>

                </div>
                <Typography variant="display2" style={{ fontSize: 30, color: '#1B5E20', opacity: 1, marginTop: 40, marginLeft: 20 }}>
                    Reservas anteriores
                </Typography>
                <div style={{ marginLeft: 20, marginTop: 20, color: '#1B5E20', alignSelf: 'center' }}>
                    Você ainda não tem reservas.
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.reserva.reservarLoading,
        error: state.reserva.reservarFail,
        idUsuario: state.usuario.id
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        reservar: (idUsuario, inicio, fim) => dispatch(actions.reservar(idUsuario, inicio, fim))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reservas);
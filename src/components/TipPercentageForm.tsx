type TipPercentageFormProps ={
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip:number
}

const TipPercentageForm = ({setTip,tip}:TipPercentageFormProps) => {

    const tipOptions = [
        {
          id: 'tip-10',
          value: .10,
          label: '10%'
        },
        {
          id: 'tip-20',
          value: .20,
          label: '20%'
        },
        {
          id: 'tip-50',
          value: .50,
          label: '50%'
        },
      ]

  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {
                tipOptions.map(item=>{
                    return(
                        <div className="flex gap-2 items-center" key={item.id}>
                            <label htmlFor={item.id}>{item.label}</label>
                            <input 
                                type="radio" 
                                id={item.id}
                                name="tip"
                                value={item.value}
                                checked={item.value === tip}
                                onChange={e=>setTip(+e.target.value)}
                            />
                        </div>
                    )
                })
            }
        </form>
    </div>
  )
}

export default TipPercentageForm
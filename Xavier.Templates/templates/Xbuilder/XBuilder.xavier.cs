
using Microsoft.Build.Logging;
using System.Security.Cryptography.X509Certificates;
namespace Xavier.PureClient
{
    public partial class XBuilder : Xavier.XavierNode
    {
        new public bool ShouldRender { get; set; } = true;
        public LSTM? lstm {get;set;}
        public XBuilder(XavierNode xavierNode):base(xavierNode)  {
            int inputDimensions = 3;
            int cellCount = 90;
            //double[] inputVector = new double[] { 1.0, 2.0, 3.0 };

            //// Create the LSTM and train it
            //lstm = new Xavier.PureClient.LSTM(inputDimensions, cellCount);

            //// Now that it's trained, use it to get a prediction
            //double[] outputVector = lstm.ForwardPropagate(inputVector);
            //foreach(double d in outputVector){
            //    Console.WriteLine(d);
            //}
        }

    public XBuilder() { }
    } 
//Create a class for our language model
    public class LSTM
    {
        // The input dimensions for the LSTM layer
        private int _inputDimensions;

        // The number of cells in the LSTM layer
        private int _cellCount;

        // The network weights
        private double[] _inputWeights;

        // The hidden weights
        private double[] _hiddenWeights;

        // The output weights
        private double[] _outputWeights;

        // The hidden bias
        private double _hiddenBias;

        // The output bias
        private double _outputBias;

        // The state
        private double[] _state;

        // The output
        private double[] _output;

        // The gates
        private double[] _inputGate;
        private double[] _forgetGate;
        private double[] _outputGate;

        // Constructor
        public LSTM(int inputDimensions, int cellCount)
        {
            _inputDimensions = inputDimensions;
            _cellCount = cellCount;


            _inputWeights = new double[_inputDimensions * _cellCount];
            _hiddenWeights = new double[_cellCount * _cellCount];
            _outputWeights = new double[_cellCount * _cellCount];

            _hiddenBias = 0.0;
            _outputBias = 0.0;

            _state = new double[_cellCount];
            _output = new double[_cellCount];

            _inputGate = new double[_cellCount];
            _forgetGate = new double[_cellCount];
            _outputGate = new double[_cellCount];
        }

        // Forward Propagate
        public double[] ForwardPropagate(double[] input)
        {
            // Sanity check
            if (input.Length != _inputDimensions)
                throw new ArgumentException("Input vector does not have the same length as the input dimensions");

            // Compute the input gate values
            for (int i = 0; i < _cellCount; i++)
            {
                double sum = 0.0;

                for (int j = 0; j < _inputDimensions; j++)
                {
                    int offset = i * _inputDimensions + j;
                    sum += input[j] * _inputWeights[offset];
                }

                sum += _hiddenBias;

                _inputGate[i] = Math.Tanh(sum);
            }

            // Compute the forget gate values
            for (int i = 0; i < _cellCount; i++)
            {
                double sum = 0.0;

                for (int j = 0; j < _cellCount; j++)
                {
                    int offset = i * _cellCount + j;
                    sum += _state[j] * _hiddenWeights[offset];
                }

                _forgetGate[i] = Math.Tanh(sum);
            }

            // Update the state
            for (int i = 0; i < _cellCount; i++)
            {
                _state[i] = _inputGate[i] * _forgetGate[i];
            }

            // Compute the output gate
            for (int i = 0; i < _cellCount; i++)
            {
                double sum = 0.0;

                for (int j = 0; j < _cellCount; j++)
                {
                    int offset = i * _cellCount + j;
                    sum += _state[j] * _hiddenWeights[offset];
                }

                _outputGate[i] = Math.Tanh(sum);
            }

            // Compute the output
            for (int i = 0; i < _cellCount; i++)
            {
                double sum = 0.0;

                for (int j = 0; j < _cellCount; j++)
                {
                    int offset = i * _cellCount + j;
                    sum += _state[j] * _outputWeights[offset];
                }

                _output[i] = Math.Tanh(sum + _outputBias);
            }
            return _output;
        }
    }
}
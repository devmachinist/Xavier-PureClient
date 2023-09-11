using Xavier;
using System.Text.Json;
using System.Diagnostics;

namespace Xavier.PureClient
{
    public class Cluster
    {
        public string _name { get; set; }
        public string Address { get; set; }
        public int Port { get; set; }
        public List<Process> _processes { get; set; } = new List<Process>();
        public Dictionary<string, object> _locks { get; set; } = new Dictionary<string, object>();
        public List<Process> _watchers { get; set; } = new List<Process>();
        public string _configPath { get; set; }

        public Cluster()
        {
        }

        public void Start()
        {
            foreach(var process in _processes) 
            {
                _watchers.Add(process);
                process.Start();
            }
        }

        public void Stop()
        {
            foreach (var process in _processes)
            {
                    process.Kill();
            }
            _processes.Clear();
            foreach (var threads in _watchers)
            {
                foreach (var thread in threads.Threads)
                {
                    thread.GetType().GetMethod("Abort").Invoke(thread,null);
                }
            }
            _watchers.Clear();
        }

        public object GetOrCreateLock(string nodeName)
        {
            lock (_locks)
            {
                if (!_locks.TryGetValue(nodeName, out object lockObj))
                {
                    lockObj = new object();
                    _locks[nodeName] = lockObj;
                }
                return lockObj;
            }
        }

        public void WatchProcess(string nodeName, Process process, string programPath)
        {
            while (true)
            {
                process.WaitForExit();

                lock (GetOrCreateLock(nodeName))
                {
                    if (_processes.Contains(process))
                    {
                        Console.WriteLine($"Process '{programPath}' on node '{_name}' exited with code {process.ExitCode}");
                        _processes.Remove(process);
                        if (process.ExitCode != 0)
                        {
                            process.Start();
                        }
                        break;
                    }
                }
            }
        }

        public string GetProgramPath(string processName)
        {
            return "";


        }

        public string GetNodeName(string processName)
        {
            return "";
        }

        private class Config
        {
            public Node[] Nodes { get; set; }
        }

        private class Node
        {
            public string Name { get; set; }
            public string[] Programs { get; set; }
        }
    }
    
}
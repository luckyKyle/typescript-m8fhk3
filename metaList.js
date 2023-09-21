export const metaList = [
  {
    ServiceName: 'NODE',
    Namespace: [
      {
        Name: 'NODE',
        Groups: [
          {
            Title: 'CPU',
            MetricMetas: [
              {
                Name: 'NODE.CPU',
                Unit: '%',
                Desc: 'CPU使用率',
                Tags: [
                  {
                    TagName: 'idle',
                    TagInfo: 'CPU IDLE 时间占比',
                    StatisticalMethod:
                      '在一个采样周期内，idle cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'irq',
                    TagInfo: '中断占比',
                    StatisticalMethod:
                      '在一个采样周期内，irq cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'nice',
                    TagInfo: 'NICE 优先级使用 CPU 占比',
                    StatisticalMethod:
                      '在一个采样周期内，nice cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'steal',
                    TagInfo: '虚拟 CPU 等待实际 CPU 时间占比',
                    StatisticalMethod:
                      '在一个采样周期内，steal cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'softirq',
                    TagInfo: 'CPU 软中断占比',
                    StatisticalMethod:
                      '在一个采样周期内，softirq cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'guest',
                    TagInfo: '运行虚拟处理器所用的时间百分比',
                    StatisticalMethod:
                      '在一个采样周期内，guest cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'system',
                    TagInfo: '内核态 CPU 占用比',
                    StatisticalMethod:
                      '在一个采样周期内，system cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'user',
                    TagInfo: '用户态 CPU 占用比',
                    StatisticalMethod:
                      '在一个采样周期内，user cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                  {
                    TagName: 'iowait',
                    TagInfo: '进程等待 IO CPU 空闲占比',
                    StatisticalMethod:
                      '在一个采样周期内，iowait cpu时间/total cpu时间 * 100%； 数据来源/proc/stat',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.CPU.COUNT',
                Unit: '个',
                Desc: '核数',
                Tags: [
                  {
                    TagName: 'cpu_count',
                    TagInfo: 'CPU 核数',
                    StatisticalMethod: '读取/proc/stat文件，获取CPU核数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.CPU.LOAD',
                Unit: '',
                Desc: '负载',
                Tags: [
                  {
                    TagName: '1m',
                    TagInfo: '1分钟负载',
                    StatisticalMethod: '读取/proc/loadavg文件，第一列数据',
                  },
                  {
                    TagName: '5m',
                    TagInfo: '5分钟负载',
                    StatisticalMethod: '读取/proc/loadavg文件，第二列数据',
                  },
                  {
                    TagName: '15m',
                    TagInfo: '15分钟负载',
                    StatisticalMethod: '读取/proc/loadavg文件，第三列数据',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '内存',
            MetricMetas: [
              {
                Name: 'NODE.MEM',
                Unit: 'GB',
                Desc: '内存使用情况',
                Tags: [
                  {
                    TagName: 'MemTotal',
                    TagInfo: '内存总量',
                    StatisticalMethod: 'free命令total一栏',
                  },
                  {
                    TagName: 'MemFree',
                    TagInfo: '空闲内存总量',
                    StatisticalMethod: 'free命令free一栏',
                  },
                  {
                    TagName: 'MemAvailable',
                    TagInfo: '可用内存总量',
                    StatisticalMethod: 'free命令available一栏',
                  },
                  {
                    TagName: 'Buffers',
                    TagInfo: 'BUFFER 缓存占用内存总量',
                    StatisticalMethod: 'free -w命令buffers一栏',
                  },
                  {
                    TagName: 'Cached',
                    TagInfo: '文件缓存占用内存总量',
                    StatisticalMethod: 'free -w命令cached一栏',
                  },
                  {
                    TagName: 'SwapCached',
                    TagInfo: '匿名页写入交换区内存总量',
                    StatisticalMethod:
                      '数据来源：/proc/meminfo的SwapCached一栏',
                  },
                  {
                    TagName: 'SwapFree',
                    TagInfo: '可用交换区总量',
                    StatisticalMethod: 'free命令Swap行free列',
                  },
                  {
                    TagName: 'AnonPages',
                    TagInfo: '未映射内存总量',
                    StatisticalMethod: '数据来源：/proc/meminfo的AnonPages一栏',
                  },
                  {
                    TagName: 'SwapTotal',
                    TagInfo: '交换区总量',
                    StatisticalMethod: 'free命令Swap行total列',
                  },
                  {
                    TagName: 'Dirty',
                    TagInfo: '需要写入磁盘的内存总量',
                    StatisticalMethod: '数据来源：/proc/meminfo的Dirty一栏',
                  },
                  {
                    TagName: 'Writeback',
                    TagInfo: '正在被写回磁盘的内存总量',
                    StatisticalMethod: '数据来源：/proc/meminfo的Writeback一栏',
                  },
                  {
                    TagName: 'HardwareCorrupted',
                    TagInfo: '内存硬件故障导致不可用内存总量',
                    StatisticalMethod:
                      '数据来源：/proc/meminfo的HardwareCorrupted一栏',
                  },
                  {
                    TagName: 'Shmem',
                    TagInfo: '共享内存占用的内存总量',
                    StatisticalMethod: 'free命令shared一栏',
                  },
                  {
                    TagName: 'CommitLimit',
                    TagInfo: '当前可分批的虚拟内存总量',
                    StatisticalMethod:
                      '数据来源：/proc/meminfo的CommitLimit一栏',
                  },
                  {
                    TagName: 'MemUsed',
                    TagInfo: '已使用内存总量',
                    StatisticalMethod: 'free命令used一栏',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.MEM_PERCENT',
                Unit: '%',
                Desc: '内存使用占比',
                Tags: [
                  {
                    TagName: 'available_percent',
                    TagInfo: '可用内存占总内存百分比',
                    StatisticalMethod:
                      '计算方式：(MemTotal-Used)/MemTotal*100%',
                  },
                  {
                    TagName: 'used_percent',
                    TagInfo: '已使用内存占总内存百分比',
                    StatisticalMethod: '计算方式：Used/MemTotal*100%',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '文件句柄',
            MetricMetas: [
              {
                Name: 'NODE.FD.FILEFD',
                Unit: '个',
                Desc: '文件句柄',
                Tags: [
                  {
                    TagName: 'allocated',
                    TagInfo: '已分配文件句柄数量',
                    StatisticalMethod:
                      '数据来源：/proc/sys/fs/file-nr第一个数值',
                  },
                  {
                    TagName: 'maximum',
                    TagInfo: '最大文件句柄数量',
                    StatisticalMethod:
                      '数据来源：/proc/sys/fs/file-nr第三个数值',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '磁盘',
            MetricMetas: [
              {
                Name: 'NODE.DISK.INODES',
                Unit: '个',
                Desc: 'INODES',
                Tags: [
                  {
                    TagName: 'Free',
                    TagInfo: '磁盘剩余 INODES 数量',
                    StatisticalMethod: '磁盘剩余INODES数量',
                  },
                  {
                    TagName: 'Total',
                    TagInfo: '磁盘 INODES 总数量',
                    StatisticalMethod: '磁盘INODES总数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.INODES_USED_PERCENT',
                Unit: '%',
                Desc: 'INODES使用率',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '磁盘 INODES 使用率',
                    StatisticalMethod: '已使用INODES数量/磁盘INODES * 100%',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.IO_NOW',
                Unit: '次/s',
                Desc: '设备IOPS',
                Tags: [
                  {
                    TagName: 'vd-',
                    TagInfo: '设备IOPS，当前设备上正在进行的 IO 操作',
                    StatisticalMethod:
                      '在一个采样中期内，设备处理的IO请求总数量/设备IO操作消耗总时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.IO_OPS',
                Unit: '次/s',
                Desc: '设备读写请求QPS',
                Tags: [
                  {
                    TagName: 'Read',
                    TagInfo: '读操作 QPS',
                    StatisticalMethod:
                      '在一个采样周期内，设备读操作总数量/设备读操作消耗总时长',
                  },
                  {
                    TagName: 'Write',
                    TagInfo: '写操作 QPS',
                    StatisticalMethod:
                      '在一个采样周期内，设备写操作总数量/设备写操作消耗总时长',
                  },
                  {
                    TagName: 'Merge-Read',
                    TagInfo: '合并读操作 QPS',
                    StatisticalMethod:
                      '在一个采样周期内，设备读合并操作总数量/设备读操作消耗总时长',
                  },
                  {
                    TagName: 'Merge-Write',
                    TagInfo: '合并写操作 QPS',
                    StatisticalMethod:
                      '在一个采样周期内，设备写合并操作总数量/设备写操作消耗总时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.IO_RATE',
                Unit: 'MB/s',
                Desc: '设备读写速率',
                Tags: [
                  {
                    TagName: 'Read',
                    TagInfo: '设备读写速率，每秒读数据量',
                    StatisticalMethod:
                      '在一个采样周期内，从设备读出数据总量/设备读数据消耗总时长',
                  },
                  {
                    TagName: 'Write',
                    TagInfo: '设备读写速率，每秒写数据量',
                    StatisticalMethod:
                      '在一个采样周期内，向设备写入数据总量/设备写数据消耗总时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.IO_TIME',
                Unit: 'ms',
                Desc: 'IO操作时间',
                Tags: [
                  {
                    TagName: 'Read',
                    TagInfo: '平均每次设备 I/O 读操作的等待时间',
                    StatisticalMethod:
                      '在一个采样周期内，设备处理读操作总时长/设备IO总次数',
                  },
                  {
                    TagName: 'Write',
                    TagInfo: '平均每次设备 I/O 写操作的等待时间',
                    StatisticalMethod:
                      '在一个采样周期内，设备处理写操作总时长/设备IO总次数',
                  },
                  {
                    TagName: 'IO',
                    TagInfo: '平均每次 IO 请求的处理时间',
                    StatisticalMethod:
                      '在一个采样周期内，设备处理IO操作总时长/设备IO总次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.SPACE_GB',
                Unit: 'GB',
                Desc: '磁盘空间',
                Tags: [
                  {
                    TagName: 'Free',
                    TagInfo: '磁盘空闲存储空间',
                    StatisticalMethod: '当前空闲存储容量',
                  },
                  {
                    TagName: 'Available',
                    TagInfo: '磁盘可用存储空间(非特权用户)',
                    StatisticalMethod: '当前非特权用户可用存储容量',
                  },
                  {
                    TagName: 'Total',
                    TagInfo: '磁盘总存储空间',
                    StatisticalMethod: '当前总存储空间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.SPACE_USED_PERCENT',
                Unit: '%',
                Desc: '磁盘空间使用率',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '磁盘空间使用率',
                    StatisticalMethod:
                      '磁盘已使用存储容量/磁盘总存储容量 * 100%',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.UTIL_PERCENT',
                Unit: '%',
                Desc: 'IO设备使用率',
                Tags: [
                  {
                    TagName: 'vd-',
                    TagInfo: 'IO设备使用率，磁盘繁忙程度',
                    StatisticalMethod:
                      '在一个采样周期内，设备IO时间/采样周期时长 * 100%',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '网络',
            MetricMetas: [
              {
                Name: 'NODE.NETWORK.PACKETS',
                Unit: '个/s',
                Desc: '网卡数据包率',
                Tags: [
                  {
                    TagName: 'eth0-receive_drop',
                    TagInfo: '网卡接收丢弃数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡接收时丢弃数据包速率',
                  },
                  {
                    TagName: 'eth0-receive_errs',
                    TagInfo: '网卡接收异常数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡接收时遇到错误数据包速率',
                  },
                  {
                    TagName: 'eth0-transmit_drop',
                    TagInfo: '网卡发送丢弃数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡发送时丢弃数据包速率',
                  },
                  {
                    TagName: 'eth0-transmit_errs',
                    TagInfo: '网卡发送异常数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡发送时遇到错误数据包速率',
                  },
                  {
                    TagName: 'eth0-transmit_packetsl',
                    TagInfo: '网卡发送包数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡发包速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.RW_BYTES',
                Unit: 'MB/s',
                Desc: '网卡收发数据速率',
                Tags: [
                  {
                    TagName: 'eth0-receive_bytes',
                    TagInfo: '网卡接收数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡接收数据速率',
                  },
                  {
                    TagName: 'eth0-transmit_bytes',
                    TagInfo: '网卡发送数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡发送数据速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.SOCKET.BYTES',
                Unit: 'bytes',
                Desc: '套接字内存',
                Tags: [
                  {
                    TagName: 'TCP_mem_bytes',
                    TagInfo: 'TCP 内存大小',
                    StatisticalMethod: '数据来源 /proc/net/sockstat',
                  },
                  {
                    TagName: 'UDP_mem_bytes',
                    TagInfo: 'UDP 内存大小',
                    StatisticalMethod: '数据来源 /proc/net/sockstat',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_ABORT',
                Unit: '次/s',
                Desc: 'TCP链接异常Abort',
                Tags: [
                  {
                    TagName: 'TCPAbortOnTimeout',
                    TagInfo:
                      '因各种计时器（RTO/PTO/keepalive）的重传次数超过上限而关闭连接的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示因各种计时器（RTO/PTO/keepalive）的重传次数超过上限而关闭连接的的数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPAbortOnData',
                    TagInfo: 'socket 收到未知数据导致被关闭的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示socket 收到未知数据导致而关闭链接的数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPAbortOnClose',
                    TagInfo: '用户态程序在缓冲区内还有数据时关闭 socket 的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示用户缓冲区还有数据时关闭链接的数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPAbortOnMemory',
                    TagInfo: '因内存问题关闭连接的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示因内存问题关闭连接的的数量，统计采样周期内增量值。',
                  },
                  {
                    TagName: 'TCPAbortOnLinger',
                    TagInfo: '关闭后，在徘徊状态中止的连接的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示关闭后，在徘徊状态中止的连接的数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPAbortFailed',
                    TagInfo: '尝试结束连接失败的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示尝试关闭链接失败的数量，统计采样周期内每秒增量值。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_CONNECTION_STATE',
                Unit: '个',
                Desc: 'TCP链接状态',
                Tags: [
                  {
                    TagName: 'ESTABLISHED',
                    TagInfo: 'Established 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中Established 状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'SYN-SENT',
                    TagInfo: 'SYN-SENT 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中SYN-SENT状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'SYN-RECV',
                    TagInfo: 'SYN-RECV 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中SYN-RECV状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'FIN-WAIT1',
                    TagInfo: 'FIN-WAIT1 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中FIN-WAIT1状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'FIN-WAIT2',
                    TagInfo: 'FIN-WAIT2 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中FIN-WAIT2状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'TIME-WAIT',
                    TagInfo: 'TIME-WAIT 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中TIME-WAIT状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'CLOSE',
                    TagInfo: 'CLOSE 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中CLOSE状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'CLOSE-WAIT',
                    TagInfo: 'CLOSE-WAIT 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中CLOSE-WAIT状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'LAST-ACK',
                    TagInfo: 'LAST-ACK 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中LAST-ACK状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'LISTEN',
                    TagInfo: 'LISTEN 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中LISTEN状态的 TCP 链接数量',
                  },
                  {
                    TagName: 'CLOSEING',
                    TagInfo: 'CLOSEING 状态的 TCP 链接数量',
                    StatisticalMethod:
                      '数据来源/proc/net/tcp, 表示当前系统中CLOSEING状态的 TCP 链接数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_LISTEN_EXT',
                Unit: '次/s',
                Desc: 'TCP LISTEN异常',
                Tags: [
                  {
                    TagName: 'ListenDrops',
                    TagInfo: '任何原因导致的丢弃传入连接（SYN 包）的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内被动接入链接失败次数，统计采用周期内每秒增量值。',
                  },
                  {
                    TagName: 'ListenOverflows',
                    TagInfo:
                      '三次握手最后一步完成之后，Accept 队列超过上限的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内Accept Queue超过上限的次数，统计采样周期内每秒增量值。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_PACKET_RATE',
                Unit: '%',
                Desc: 'TCP重传率',
                Tags: [
                  {
                    TagName: 'RetransSegsRate',
                    TagInfo: 'TCP 层重传率',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内TCP 层重传率',
                  },
                  {
                    TagName: 'ResetRate',
                    TagInfo: 'RESET 发送频率',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内RESET 发送频率',
                  },
                  {
                    TagName: 'InErrRate',
                    TagInfo: '错误包占比',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内错误包占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_PACKET_STAT',
                Unit: '个/s',
                Desc: 'TCP数据包',
                Tags: [
                  {
                    TagName: 'InSegs',
                    TagInfo: '收到的数据包个数，包括有错误的包个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内收到的数据包速率',
                  },
                  {
                    TagName: 'OutSegs',
                    TagInfo: '发送的数据包个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内TCP 发送报文速率',
                  },
                  {
                    TagName: 'RetransSegs',
                    TagInfo: 'TCP 接收报文数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内TCP接收的包速率',
                  },
                  {
                    TagName: 'InErrs',
                    TagInfo: '重传的包个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内重传的包速率',
                  },
                  {
                    TagName: 'OutRsts',
                    TagInfo: '发出 RST 包个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内发出 RST 包速率',
                  },
                  {
                    TagName: 'EmbryonicRsts',
                    TagInfo: '在 SYN_RECV 状态收到带 RST/SYN 标记的包个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内在 SYN_RECV 状态收到带 RST/SYN 标记的包速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_RETRANS',
                Unit: '次/s',
                Desc: 'TCP重传',
                Tags: [
                  {
                    TagName: 'TCPLostRetransmit',
                    TagInfo: '丢失重传 SKB 的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示丢失重传 SKB 的次数，统计采样周期内每秒增量值',
                  },
                  {
                    TagName: 'TCPFastRetrans',
                    TagInfo: '快重传 SKB 次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示快重传 SKB 次数，统计采样周期内每秒增量值',
                  },
                  {
                    TagName: 'TCPForwardRetrans',
                    TagInfo: '一般重传 SKB 次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示一般重传 SKB 次数，统计采样周期内每秒增量值',
                  },
                  {
                    TagName: 'TCPSlowStartRetrans',
                    TagInfo: '成功慢启动重传 SKB 数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示成功慢启动重传 SKB 数量，统计采样周期内每秒增量值',
                  },
                  {
                    TagName: 'TCPRetransFail',
                    TagInfo: '尝试重传失败次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示尝试重传失败次数，统计采样周期内每秒增量值',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_RTO_CONST',
                Unit: '1',
                Desc: 'TCP RTO常数',
                Tags: [
                  {
                    TagName: 'RtoAlgorithm',
                    TagInfo: '转发未答复对象的延时的算法的数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示转发未答复对象的延时的算法的数量。',
                  },
                  {
                    TagName: 'RtoMax',
                    TagInfo: 'TCP 延迟重发的最大值',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示TCP 延迟重发的最大值。',
                  },
                  {
                    TagName: 'RtoMin',
                    TagInfo: 'TCP 延迟重发的最小值',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示TCP 延迟重发的最小值。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_RTO_STAT',
                Unit: '1',
                Desc: 'TCP RTO',
                Tags: [
                  {
                    TagName: 'TCPTimeouts',
                    TagInfo: 'RTO timer 第一次超时次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示RTO timer 第一次超时次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPSpuriousRTOs',
                    TagInfo: '通过 F-RTO 机制发现的虚假超时次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示通过 F-RTO 机制发现的虚假超时次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPLossProbes',
                    TagInfo:
                      'Probe Timeout(PTO) 导致发送 Tail Loss Probe(TLP) 包的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示Probe Timeout(PTO) 导致发送 Tail Loss Probe(TLP) 包的次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPLossProbeRecovery',
                    TagInfo: '丢失包刚好被 TLP 探测包修复的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示丢失包刚好被 TLP 探测包修复的次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPRenoRecoveryFail',
                    TagInfo:
                      '先进入 Recovery 阶段，然后又 RTO 的次数，对端不支持 SACK 选项',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示先进入 Recovery 阶段，然后又 RTO 的次数，对端不支持 SACK 选项，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPSackRecoveryFail',
                    TagInfo:
                      '先进入 Recovery 阶段，然后又 RTO 的次数，对端支持 SACK 选项',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示先进入 Recovery 阶段，然后又 RTO 的次数，对端支持 SACK 选项，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPRenoFailures',
                    TagInfo:
                      '先进 TCP_CA_Disorder 阶段，然后又 RTO 超时的次数，对端不支持 SACK 选项',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示先进入 TCP_CA_Disorder 阶段，然后又 RTO 超时的次数，对端不支持 SACK 选项，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPSackFailures',
                    TagInfo:
                      '先进 TCP_CA_Disorder 阶段，然后又 RTO 超时的次数，对端支持 SACK 选项',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示先进 入TCP_CA_Disorder 阶段，然后又 RTO 超时的次数，对端支持 SACK 选项，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPLossFailures',
                    TagInfo: '先进 TCP_CA_Loss 阶段，然后又 RTO 超时的次数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示先进入 TCP_CA_Loss 阶段，然后又 RTO 超时的次数，统计采样周期内每秒增量值。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_SOCKET',
                Unit: '个',
                Desc: 'TCP套接字',
                Tags: [
                  {
                    TagName: 'TCP_inuse',
                    TagInfo: '在使用（正在侦听）的 TCP 套接字数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/sockstat，表示正在使用（正在侦听）的 TCP 套接字数量',
                  },
                  {
                    TagName: 'TCP_orphan',
                    TagInfo: '等待关闭的 TCP 连接数',
                    StatisticalMethod:
                      '数据来源 /proc/net/sockstat，表示等待关闭的 TCP 连接数',
                  },
                  {
                    TagName: 'TCP_tw',
                    TagInfo: '待销毁的 TCP socket 数',
                    StatisticalMethod:
                      '数据来源 /proc/net/sockstat，表示待销毁的 TCP socket 数',
                  },
                  {
                    TagName: 'TCP_alloc',
                    TagInfo:
                      '已分配（已建立、已申请到 sk_buff）的 TCP 套接字数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/sockstat，表示已分配（已建立、已申请到 sk_buff）的 TCP 套接字数量',
                  },
                  {
                    TagName: 'sockets_used',
                    TagInfo: '已使用的套接字总量',
                    StatisticalMethod:
                      '数据来源 /proc/net/sockstat，表示已使用的所有协议套接字总量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_STATE',
                Unit: '个',
                Desc: 'TCP建立链接',
                Tags: [
                  {
                    TagName: 'ActiveOpens',
                    TagInfo: '主动建立 TCP 连接数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内主动建立链的次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'CurrEstab',
                    TagInfo: '当前已建立 TCP 连接数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内已建立链的次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'PassiveOpens',
                    TagInfo: '被动建立 TCP 连接数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内被动建立链的次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'AttemptFails',
                    TagInfo: '建立连接失败数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内建立链接失败的次数，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'EstabResets',
                    TagInfo: '连接被 RESET 的数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内连接被 RESET 的数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_SYNCOOKIES',
                Unit: '次/s',
                Desc: 'TCPSyncookies',
                Tags: [
                  {
                    TagName: 'SyncookiesFailed',
                    TagInfo: '收到携带无效 SYN Cookie 信息的包的个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内收到携带无效的SYN Cookie包的数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'SyncookiesRecv',
                    TagInfo: '收到携带有效 SYN Cookie 信息的包的个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内收到携带有效的SYN Cookie包的数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'SyncookiesSent',
                    TagInfo: '使用 SYN Cookie 发送的 SYN/ACK 包个数',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内发送携带有效的SYN Cookie包的数量，统计采样周期内每秒增量值。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_TIME_WAIT',
                Unit: '个/s',
                Desc: 'TCP TIME-WAIT',
                Tags: [
                  {
                    TagName: 'TW',
                    TagInfo: '经过正常的超时结束 TIME_WAIT 状态的 socket 数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示通过正常超时结束TIME-WAIT状态的链接数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TWKilled',
                    TagInfo:
                      '通过 tcp_tw_recycle 机制结束 TIME_WAIT 状态的 socket 数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示通过recycle机制结束TIME-WAIT状态的链接数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TCPTimeWaitOverflow',
                    TagInfo: '因为超过限制而无法分配的 TIME_WAIT socket 数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示因为超过限制而无法分配而结束TIME-WAIT状态的连接数数量，统计采样周期内每秒增量值。',
                  },
                  {
                    TagName: 'TWRecycled',
                    TagInfo:
                      '通过 tcp_tw_reuse 机制结束 TIME_WAIT 状态的 socket 数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示通过reuse机制结束TIME-WAIT状态的链接数量，统计采样周期内每秒增量值。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.UDP_DG',
                Unit: '个/s',
                Desc: 'UDP数据报',
                Tags: [
                  {
                    TagName: 'OutDatagrams',
                    TagInfo: '发送 UDP 数据报文数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示发送 UDP 数据报文速率',
                  },
                  {
                    TagName: 'InDatagrams',
                    TagInfo: '接收 UDP 数据报文数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示接收 UDP 数据报文速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.UDP_SOCKET',
                Unit: '个',
                Desc: 'UDP套接字',
                Tags: [
                  {
                    TagName: 'UDP_inuse',
                    TagInfo: '在使用（正在侦听）的 UDP 套接字数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/sockstat，表示正在使用（正在侦听）的 UDP 套接字数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'NODE.INTR',
                Unit: '次/s',
                Desc: '系统中断',
                Tags: [
                  {
                    TagName: 'intr_total',
                    TagInfo: '系统中断数量',
                    StatisticalMethod:
                      '/proc/stat的intr行第一个数值增加量/采样周期时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.PROCS',
                Unit: '个',
                Desc: '系统进程',
                Tags: [
                  {
                    TagName: 'forks_total',
                    TagInfo: '系统新建进程数量',
                    StatisticalMethod: '/proc/stat的processes行数值增加量',
                  },
                  {
                    TagName: 'procs_running',
                    TagInfo: '系统运行进程数量',
                    StatisticalMethod:
                      '数据来源：/proc/stat的procs_running一栏',
                  },
                  {
                    TagName: 'procs_blocked',
                    TagInfo: '系统阻塞进程数量',
                    StatisticalMethod:
                      '数据来源：/proc/stat的procs_blocked一栏',
                  },
                  {
                    TagName: 'procs_total',
                    TagInfo: '系统总进程数量',
                    StatisticalMethod:
                      '等效于命令行输出：ps -e --no-headers | wc -l',
                  },
                  {
                    TagName: 'thrds_total',
                    TagInfo: '系统总线程数',
                    StatisticalMethod:
                      '等效于命令行输出：ps -eL --no-headers | wc -l',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.SWITCHES',
                Unit: '次/s',
                Desc: '系统上下文切换',
                Tags: [
                  {
                    TagName: 'context_switches_total',
                    TagInfo: '系统上下文切换数量',
                    StatisticalMethod:
                      '/proc/stat的ctxt行数值增加量/采样周期时长',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'Overview',
        Groups: [
          {
            Title: '概览',
            MetricMetas: [
              {
                Name: 'NODE.CPU.FAKE',
                Unit: '%',
                Desc: 'CPU使用率',
                Tags: [
                  {
                    TagName: 'used',
                    TagInfo: '1-(CPU IDLE 时间占比)',
                    StatisticalMethod:
                      '在一个采样周期内，idle cpu时间/total cpu时间 * 100%，计算与1的差值； 数据来源/proc/stat',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.CPU.LOAD_15MIN',
                Unit: '',
                Desc: 'CPU十五分钟负载',
                Tags: [
                  {
                    TagName: '15m',
                    TagInfo: '15分钟负载',
                    StatisticalMethod: '读取/proc/loadavg文件，第三列数据',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'NODE.CPU.LOAD_1MIN',
                Unit: '',
                Desc: 'CPU一分钟负载',
                Tags: [
                  {
                    TagName: '1m',
                    TagInfo: '1分钟负载',
                    StatisticalMethod: '读取/proc/loadavg文件，第一列数据',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.CPU.LOAD_5MIN',
                Unit: '',
                Desc: 'CPU五分钟负载',
                Tags: [
                  {
                    TagName: '5m',
                    TagInfo: '5分钟负载',
                    StatisticalMethod: '读取/proc/loadavg文件，第二列数据',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'NODE.DISK.IO_NOW.FAKE',
                Unit: '次',
                Desc: '磁盘 IOPS',
                Tags: [
                  {
                    TagName: 'all',
                    TagInfo: '设备IOPS，当前设备上正在进行的 IO 操作',
                    StatisticalMethod:
                      '在一个采样中期内，设备处理的IO请求总数量/设备IO操作消耗总时长',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'NODE.DISK.IO_TIME.FAKE',
                Unit: 'ms',
                Desc: '磁盘IO操作时间',
                Tags: [
                  {
                    TagName: 'IO',
                    TagInfo: '平均每次 IO 请求的处理时间',
                    StatisticalMethod:
                      '在一个采样周期内，设备处理IO操作总时长/设备IO总次数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'NODE.DISK.SPACE_USED_PERCENT.FAKE',
                Unit: '%',
                Desc: '磁盘空间使用率',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '磁盘空间使用率',
                    StatisticalMethod:
                      '磁盘已使用存储容量/磁盘总存储容量 * 100%',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.DISK.UTIL_PERCENT.FAKE',
                Unit: '%',
                Desc: '磁盘IO设备使用率',
                Tags: [
                  {
                    TagName: 'all',
                    TagInfo: 'IO设备使用率，磁盘繁忙程度',
                    StatisticalMethod:
                      '在一个采样周期内，设备IO时间/采样周期时长 * 100%',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'NODE.MEM_PERCENT.FAKE',
                Unit: '%',
                Desc: '内存使用率',
                Tags: [
                  {
                    TagName: 'used_percent',
                    TagInfo: '已使用内存占总内存百分比',
                    StatisticalMethod: '计算方式：Used/MemTotal*100%',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.RW_BYTES_R',
                Unit: 'MB/s',
                Desc: '出网络流量速率',
                Tags: [
                  {
                    TagName: '*-transmit_bytes',
                    TagInfo: '网卡发送数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡发送数据速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.RW_BYTES_W',
                Unit: 'MB/s',
                Desc: '入网络流量速率',
                Tags: [
                  {
                    TagName: '*-receive_bytes',
                    TagInfo: '网卡接收数据量',
                    StatisticalMethod:
                      '数据来源 /proc/net/dev ，表示网卡接收数据速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'NODE.NETWORK.TCP_STATE.FAKE',
                Unit: '个',
                Desc: 'TCP连接数',
                Tags: [
                  {
                    TagName: 'CurrEstab',
                    TagInfo: '当前已建立 TCP 连接数量',
                    StatisticalMethod:
                      '数据来源 /proc/net/netstat ，表示采样周期内已建立链的次数，统计采样周期内每秒增量值。',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'MAPREDUCEAPP',
    Namespace: [
      {
        Name: 'Overview',
        Groups: [
          {
            Title: '概览',
            MetricMetas: [
              {
                Name: 'MAPREDUCEAPP.MAP.AVG.TIME',
                Unit: 'ms',
                Desc: 'MAP任务平均时间',
                Tags: [
                  {
                    TagName: 'avgmaptime',
                    TagInfo: 'MAP任务的平均时间',
                    StatisticalMethod:
                      '数据来源 MapReduce History Server REST API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MAPREDUCEAPP.MAP.CORE.TIME',
                Unit: 'ms',
                Desc: '全部MAP消耗CPU时间',
                Tags: [
                  {
                    TagName: 'vcoresmillismaps',
                    TagInfo: 'MAP任务的平均时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MAPREDUCEAPP.REDUCE.AVG.TIME',
                Unit: 'ms',
                Desc: 'REDUCE任务平均时间',
                Tags: [
                  {
                    TagName: 'avgreducetime',
                    TagInfo: 'REDUCE任务的平均时间',
                    StatisticalMethod:
                      '数据来源 MapReduce History Server REST API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MAPREDUCEAPP.REDUCE.CORE.TIME',
                Unit: 'ms',
                Desc: '全部REDUCE消耗CPU时间',
                Tags: [
                  {
                    TagName: 'vcoresmillisreduces',
                    TagInfo: 'REDUCE任务的平均时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MAPREDUCEAPP.TASK.GCTIME',
                Unit: 'ms',
                Desc: '全部task GC time',
                Tags: [
                  {
                    TagName: 'gctimemillis',
                    TagInfo: 'REDUCE任务的平均时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MR.MAP.COMPLETED.COUNT',
                Unit: '个',
                Desc: '应用完成的MAP总数',
                Tags: [
                  {
                    TagName: 'mapscompleted',
                    TagInfo: 'App中完成的map总数量',
                    StatisticalMethod:
                      '数据来源 MapReduce History Server REST API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MR.MAP.TOTAL.COUNT',
                Unit: '个',
                Desc: 'MAP总数',
                Tags: [
                  {
                    TagName: 'mapstotal',
                    TagInfo: 'App中Map总数量',
                    StatisticalMethod:
                      '数据来源 MapReduce History Server REST API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MR.REDUCE.COMPLETED.COUNT',
                Unit: '个',
                Desc: '应用完成的REDUCE总数',
                Tags: [
                  {
                    TagName: 'reducescompleted',
                    TagInfo: 'App中完成的reduce总数',
                    StatisticalMethod:
                      '数据来源 MapReduce History Server REST API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'MR.REDUCE.TOTAL.COUNT',
                Unit: '个',
                Desc: 'REDUCE总数',
                Tags: [
                  {
                    TagName: 'reducestotal',
                    TagInfo: 'App中Reduce总数量',
                    StatisticalMethod:
                      '数据来源 MapReduce History Server REST API',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'TEZAPP',
    Namespace: [
      {
        Name: 'Overview',
        Groups: [
          {
            Title: '概览',
            MetricMetas: [
              {
                Name: 'TEZAPP.MAP.AVG.TIME',
                Unit: 'ms',
                Desc: 'MAP任务平均时间',
                Tags: [
                  {
                    TagName: 'avgmaptime',
                    TagInfo: 'MAP任务的平均时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.MAP.COMPLETED.COUNT',
                Unit: '个',
                Desc: '应用完成的MAP总数',
                Tags: [
                  {
                    TagName: 'mapscompleted',
                    TagInfo: 'App中完成的map总数量',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.MAP.CORE.TIME',
                Unit: 'ms',
                Desc: '全部MAP消耗CPU时间',
                Tags: [
                  {
                    TagName: 'vcoresmillismaps',
                    TagInfo: 'MAP任务的CPU时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.MAP.TOTAL.COUNT',
                Unit: '个',
                Desc: '应用MAP总数量',
                Tags: [
                  {
                    TagName: 'mapstotal',
                    TagInfo: 'App中Map总数量',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.REDUCE.AVG.TIME',
                Unit: 'ms',
                Desc: 'REDUCE任务平均时间',
                Tags: [
                  {
                    TagName: 'avgreducetime',
                    TagInfo: 'REDUCE任务的平均时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.REDUCE.COMPLETED.COUNT',
                Unit: '个',
                Desc: '应用完成的REDUCE总数',
                Tags: [
                  {
                    TagName: 'reducescompleted',
                    TagInfo: 'App中完成的reduce总数',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.REDUCE.CORE.TIME',
                Unit: 'ms',
                Desc: '全部REDUCE消耗CPU时间',
                Tags: [
                  {
                    TagName: 'vcoresmillisreduces',
                    TagInfo: 'REDUCE任务的平均时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.REDUCE.TOTAL.COUNT',
                Unit: '个',
                Desc: '应用REDUCE总数量',
                Tags: [
                  {
                    TagName: 'reducestotal',
                    TagInfo: 'App中Reduce总数量',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TEZAPP.TASK.GCTIME',
                Unit: 'ms',
                Desc: '全部task GC time',
                Tags: [
                  {
                    TagName: 'gctimemillis',
                    TagInfo: '任务的总GC时间',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'SPARKAPP',
    Namespace: [
      {
        Name: 'Overview',
        Groups: [
          {
            Title: '概览',
            MetricMetas: [
              {
                Name: 'SPARKAPP.MEMORY_SECONDS',
                Unit: '字节*秒',
                Desc: 'MemorySeconds',
                Tags: [
                  {
                    TagName: 'memoryseconds',
                    TagInfo: 'App中MemorySeconds的总量',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.VCORE_SECONDS',
                Unit: 'VCore*秒',
                Desc: 'VCoreSeconds',
                Tags: [
                  {
                    TagName: 'vcoreseconds',
                    TagInfo: 'App中VCoreSeconds的总量',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'Stage',
        Groups: [
          {
            Title: 'Stage',
            MetricMetas: [
              {
                Name: 'SPARKAPP.STAGE.COMPLETE_TASK.COUNT',
                Unit: '个',
                Desc: 'Stage完成的task数量',
                Tags: [
                  {
                    TagName: 'numcompletetasks',
                    TagInfo: 'Stage 完成的task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.EXECUTOR_CPU_TIME',
                Unit: '毫秒',
                Desc: 'Stage Executor运行使用的CPU时间',
                Tags: [
                  {
                    TagName: 'executorcputime',
                    TagInfo: 'Stage Executor 使用的Cpu时间',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.FAILED_TASK.COUNT',
                Unit: '个',
                Desc: 'Stage失败task数量',
                Tags: [
                  {
                    TagName: 'numfailedtasks',
                    TagInfo: 'Stage 失败task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.JVM_GC_TIME',
                Unit: '毫秒',
                Desc: 'Stage JvmGC时间',
                Tags: [
                  {
                    TagName: 'jvmgctime',
                    TagInfo: 'Stage Jvm GC时间',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.KILLED_TASK.COUNT',
                Unit: '个',
                Desc: 'Stage被杀task数量',
                Tags: [
                  {
                    TagName: 'numkilledtasks',
                    TagInfo: 'Stage 被杀task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.NUM_ACTIVE_TASKS',
                Unit: '个',
                Desc: 'Stage 运行中的task数量',
                Tags: [
                  {
                    TagName: 'numactivetasks',
                    TagInfo: 'Stage 运行中的task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.SHUFFLE_READ_BYTES',
                Unit: '字节',
                Desc: 'Stage ShuffleReadBytes',
                Tags: [
                  {
                    TagName: 'shufflereadbytes',
                    TagInfo: 'Stage Shuffle Read字节总数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.SHUFFLE_READ_RECORDS',
                Unit: '字节',
                Desc: 'Stage Shuffle读记录数',
                Tags: [
                  {
                    TagName: 'shufflereadrecords',
                    TagInfo: 'Stage Shuffle Read记录数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.SHUFFLE_WRITE_BYTES',
                Unit: '字节',
                Desc: 'Stage Shuffle写字节数',
                Tags: [
                  {
                    TagName: 'shufflewritebytes',
                    TagInfo: 'Stage Shuffle 写字节数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.SHUFFLE_WRITE_RECORDS',
                Unit: '字节',
                Desc: 'Stage Shuffle写记录数',
                Tags: [
                  {
                    TagName: 'shufflewriterecords',
                    TagInfo: 'Stage Shuffle 写记录数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.TOTAL.INPUT_BYTE',
                Unit: '字节',
                Desc: 'Stage Total InputBytes',
                Tags: [
                  {
                    TagName: 'inputbytes',
                    TagInfo: 'Stage处理的字节总数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPP.STAGE.TOTAL.OUTPUT_BYTE',
                Unit: '字节',
                Desc: 'Stage OutputBytes',
                Tags: [
                  {
                    TagName: 'outputbytes',
                    TagInfo: 'Stage输出的字节总数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'SPARKAPPK8S',
    Namespace: [
      {
        Name: 'Overview',
        Groups: [
          {
            Title: '概览',
            MetricMetas: [
              {
                Name: 'SPARKAPPK8S.CORE_SECONDS',
                Unit: 'Core*秒',
                Desc: 'CoreSeconds',
                Tags: [
                  {
                    TagName: 'coreseconds',
                    TagInfo: 'App中CoreSeconds的总量',
                    StatisticalMethod: '数据来源 EMR自研 API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.MEMORY_SECONDS',
                Unit: '字节*秒',
                Desc: 'MemorySeconds',
                Tags: [
                  {
                    TagName: 'memoryseconds',
                    TagInfo: 'App中MemorySeconds的总量',
                    StatisticalMethod: '数据来源 The YARN Timeline Server API',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'Stage',
        Groups: [
          {
            Title: 'Stage',
            MetricMetas: [
              {
                Name: 'SPARKAPPK8S.STAGE.COMPLETE_TASK.COUNT',
                Unit: '个',
                Desc: 'Stage完成的task数量',
                Tags: [
                  {
                    TagName: 'numcompletetasks',
                    TagInfo: 'Stage 完成的task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.EXECUTOR_CPU_TIME',
                Unit: '毫秒',
                Desc: 'Stage Executor运行使用的CPU时间',
                Tags: [
                  {
                    TagName: 'executorcputime',
                    TagInfo: 'Stage Executor 使用的Cpu时间',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.FAILED_TASK.COUNT',
                Unit: '个',
                Desc: 'Stage失败task数量',
                Tags: [
                  {
                    TagName: 'numfailedtasks',
                    TagInfo: 'Stage 失败task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.JVM_GC_TIME',
                Unit: '毫秒',
                Desc: 'Stage JvmGC时间',
                Tags: [
                  {
                    TagName: 'jvmgctime',
                    TagInfo: 'Stage Jvm GC时间',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.KILLED_TASK.COUNT',
                Unit: '个',
                Desc: 'Stage被杀task数量',
                Tags: [
                  {
                    TagName: 'numkilledtasks',
                    TagInfo: 'Stage 被杀task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.NUM_ACTIVE_TASKS',
                Unit: '个',
                Desc: 'Stage 运行中的task数量',
                Tags: [
                  {
                    TagName: 'numactivetasks',
                    TagInfo: 'Stage 运行中的task数量',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.SHUFFLE_READ_BYTES',
                Unit: '字节',
                Desc: 'Stage ShuffleReadBytes',
                Tags: [
                  {
                    TagName: 'shufflereadbytes',
                    TagInfo: 'Stage Shuffle Read字节总数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.SHUFFLE_READ_RECORDS',
                Unit: '字节',
                Desc: 'Stage Shuffle读记录数',
                Tags: [
                  {
                    TagName: 'shufflereadrecords',
                    TagInfo: 'Stage Shuffle Read记录数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.SHUFFLE_WRITE_BYTES',
                Unit: '字节',
                Desc: 'Stage Shuffle写字节数',
                Tags: [
                  {
                    TagName: 'shufflewritebytes',
                    TagInfo: 'Stage Shuffle 写字节数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.SHUFFLE_WRITE_RECORDS',
                Unit: '字节',
                Desc: 'Stage Shuffle写记录数',
                Tags: [
                  {
                    TagName: 'shufflewriterecords',
                    TagInfo: 'Stage Shuffle 写记录数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.TOTAL.INPUT_BYTE',
                Unit: '字节',
                Desc: 'Stage Total InputBytes',
                Tags: [
                  {
                    TagName: 'inputbytes',
                    TagInfo: 'Stage处理的字节总数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARKAPPK8S.STAGE.TOTAL.OUTPUT_BYTE',
                Unit: '字节',
                Desc: 'Stage OutputBytes',
                Tags: [
                  {
                    TagName: 'outputbytes',
                    TagInfo: 'Stage输出的字节总数',
                    StatisticalMethod: '数据来源 The Spark History Server API',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'HDFS',
    Namespace: [
      {
        Name: '概览',
        Groups: [
          {
            Title: '集群概要',
            MetricMetas: [
              {
                Name: 'HDFS.NN.BLOCK.CAPACITY',
                Unit: '个',
                Desc: 'BLOCK容量',
                Tags: [
                  {
                    TagName: 'BlockCapacity',
                    TagInfo: 'BLOCK 容量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:BlockCapacity，表示BLOCK 容量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.BLOCKS',
                Unit: '个',
                Desc: 'BLOCKS数量',
                Tags: [
                  {
                    TagName: 'BlocksTotal',
                    TagInfo: '总 BLOCK 数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:BlocksTotal，表示已分配的数据块总数',
                  },
                  {
                    TagName: 'PendingReplicationBlocks',
                    TagInfo: '等待被备份的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:PendingReplicationBlocks，表示等待被备份的块数量',
                  },
                  {
                    TagName: 'UnderReplicatedBlocks',
                    TagInfo: '副本数不够的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:UnderReplicatedBlocks，表示副本数不够的块数量',
                  },
                  {
                    TagName: 'CorruptBlocks',
                    TagInfo: '坏块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:CorruptBlocks，表示坏块数量',
                  },
                  {
                    TagName: 'ScheduledReplicationBlocks',
                    TagInfo: '安排要备份的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:ScheduledReplicationBlocks，表示安排要备份的块数量',
                  },
                  {
                    TagName: 'PendingDeletionBlocks',
                    TagInfo: '等待被删除的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:PendingDeletionBlocks，表示等待被删除的块数量',
                  },
                  {
                    TagName: 'ExcessBlocks',
                    TagInfo: '多于的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:ExcessBlocks，表示多余的块数量',
                  },
                  {
                    TagName: 'PostponedMisreplicatedBlocks',
                    TagInfo: '被推迟处理的异常块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:PostponedMisreplicatedBlocks，表示被推迟处理的异常块数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.CAPACITY',
                Unit: 'GB',
                Desc: '集群存储容量',
                Tags: [
                  {
                    TagName: 'CapacityTotal',
                    TagInfo: '集群存储总容量',
                    StatisticalMethod:
                      '数据来源JMX FSNamesystem:CapacityTotalGB，表示各DataNode节点存储容量的总和',
                  },
                  {
                    TagName: 'CapacityUsed',
                    TagInfo: '集群存储已使用容量',
                    StatisticalMethod:
                      '数据来源JMX FSNamesystem:CapacityUsedGB，表示各DataNode节点已使用的容量的总和',
                  },
                  {
                    TagName: 'CapacityRemaining',
                    TagInfo: '集群存储剩余容量',
                    StatisticalMethod:
                      '数据来源JMX FSNamesystem:CapacityRemainingGB，表示各DataNode节点未使用的容量的总和',
                  },
                  {
                    TagName: 'CapacityUsedNonDFS',
                    TagInfo: '集群非 HDFS 使用容量',
                    StatisticalMethod:
                      '数据来源JMX FSNamesystem:CapacityUsedNonDFS，公式 CapacityUsedNonDFS=CapacityTotal-CapacityUsed-CapacityRemaining，',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.DATANODES_COUNT',
                Unit: '个',
                Desc: '集群数据节点',
                Tags: [
                  {
                    TagName: 'NumLiveDataNodes',
                    TagInfo: '活的数据节点数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystemState:NumLiveDataNodes，表示活的数据节点数量',
                  },
                  {
                    TagName: 'NumDeadDataNodes',
                    TagInfo: '已经标记为 Dead 状态的数据节点数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystemState:NumDeadDataNodes，表示已经标记为 Dead 状态的数据节点数量',
                  },
                  {
                    TagName: 'NumDecomLiveDataNodes',
                    TagInfo: '下线且 Live 的节点数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystemState:NumDecomLiveDataNodes，表示下线且 Live 的节点数量',
                  },
                  {
                    TagName: 'NumDecomDeadDataNodes',
                    TagInfo: '下线且 Dead 的节点数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystemState:NumDecomDeadDataNodes，表示下线且 Dead 的节点数量',
                  },
                  {
                    TagName: 'NumDecommissioningDataNodes',
                    TagInfo: '正在下线的节点数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystemState:NumDecommissioningDataNodes，表示正在下线的DataNode节点数目',
                  },
                  {
                    TagName: 'NumStaleDataNodes',
                    TagInfo: '标记为过期状态的DataNode数目',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystemState:NumStaleDataNodes ，表示由于心跳延迟而处于过期状态的DataNode节点数目',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.FILES.TOTAL',
                Unit: '个',
                Desc: '集群文件总数量',
                Tags: [
                  {
                    TagName: 'FilesTotal',
                    TagInfo: '总文件数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:FilesTotal，表示目录树中所有目录节点和文件节点的总和',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.LOAD',
                Unit: '1',
                Desc: '集群负载',
                Tags: [
                  {
                    TagName: 'TotalLoad',
                    TagInfo: '当前连接数',
                    StatisticalMethod:
                      '数据来源JMX FSNamesystem:TotalLoad，表示各DataNode节点用于接收数据读写请求的线程数的总和',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.STATE.FAKE',
                Unit: '1:主,0:备',
                Desc: '主备情况',
                Tags: [
                  {
                    TagName: 'State',
                    TagInfo: 'NameNode主备情况',
                    StatisticalMethod: '数据来源 JMX NameNodeStatus:State',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.STAT.USAGE.RATIO',
                Unit: '%',
                Desc: 'HDFS存储空间使用率',
                Tags: [
                  {
                    TagName: 'CapacityUsedRate',
                    TagInfo: 'HDFS集群存储空间使用率',
                    StatisticalMethod:
                      '数据来源 指标CapacityUsedGB 除以 指标CapacityTotalGB，表示已使用存储空间占已配置的总存储空间的百分比',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '磁盘',
            MetricMetas: [
              {
                Name: 'HDFS.NN.VOLUME_FAILURES',
                Unit: '次',
                Desc: '磁盘故障',
                Tags: [
                  {
                    TagName: 'VolumeFailuresTotal',
                    TagInfo: '所有 Datanodes 的卷故障总数',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:VolumeFailuresTotal，表示所有 Datanodes 的卷故障总数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'SNAPSHOT',
            MetricMetas: [
              {
                Name: 'HDFS.NN.SNAPSHOTS',
                Unit: '个',
                Desc: 'SNAPSHOT相关',
                Tags: [
                  {
                    TagName: 'Snapshots',
                    TagInfo: 'Snapshots 数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:Snapshots，表示Snapshots 数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'DataNode',
        Groups: [
          {
            Title: '4004端口',
            MetricMetas: [
              {
                Name: 'HDFS.DN.PORT4004.AUTH',
                Unit: '次',
                Desc: '验证和授权',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC 验证失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:RpcAuthenticationFailures 变化量与时间的比值，表示RPC 验证失败次数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC 验证成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:RpcAuthenticationSuccesses 变化量与时间的比值，表示RPC 验证成功次数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC 授权失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:RpcAuthorizationFailures 变化量与时间的比值，表示RPC 授权失败次数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC 授权成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:RpcAuthorizationSuccesses 变化量与时间的比值，表示RPC 授权成功次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.PORT4004.CONNECTIONS',
                Unit: '个',
                Desc: '当前连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前连接数量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:NumOpenConnections 变化量与时间的比值，表示当前连接数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.PORT4004.QPS',
                Unit: '次/s',
                Desc: 'QPS',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 调用速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:RpcQueueTimeNumOps 变化量与时间的比值，表示RPC 调用速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.PORT4004.QUEUE_LEN',
                Unit: '1',
                Desc: 'RPC处理队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前 RPC 处理队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:CallQueueLength 变化量与时间的比值，表示当前 RPC 处理队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.PORT4004.RT',
                Unit: 'ms',
                Desc: '请求处理延迟',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:RpcQueueTimeAvgTime 变化量与时间的比值，表示RPC 平均延迟时间',
                  },
                  {
                    TagName: 'RpcProcessingTimeAvgTime',
                    TagInfo: 'RPC 请求平均处理时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:RpcProcessingTimeAvgTime，表示RPC 请求平均处理时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.PORT4004.RXTX',
                Unit: 'KB/s',
                Desc: '数据流量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: '接收数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:ReceivedBytes 变化量与时间的比值，表示接收数据速率',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: '发送数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:SentBytes 变化量与时间的比值，表示发送数据速率',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HDFS.DN.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC 次数',
                Tags: [
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC 时间',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.JVM.JAVA_THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '处于 NEW 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '处于 RUNNABLE 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '处于 BLOCKED 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '处于 WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '处于 TIMED WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '处于 Terminated 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.JVM.LOG_TOTAL',
                Unit: '条',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal 变化量，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError 变化量，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn 变化量，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo 变化量，表示INFO日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 配置的 NonHeapCommittedM 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM HeapMemory 提交大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: 'JVM 运行时的可以使用的最大的内存的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示JVM 的内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'RAM DISK',
            MetricMetas: [
              {
                Name: 'HDFS.DN.RAM_BLOCKS_BYTES',
                Unit: 'Bytes/s',
                Desc: 'RAMDISK写入速度',
                Tags: [
                  {
                    TagName: 'RamDiskBytesWrite',
                    TagInfo: '写入内存的总字节数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBytesWrite 变化量与时间的比值，表示写入内存的总字节数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.RAM_BLOCKS_OP',
                Unit: '次/s',
                Desc: 'RAMDISK Blocks',
                Tags: [
                  {
                    TagName: 'RamDiskBlocksWrite',
                    TagInfo: '写入内存的块的总数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBlocksWrite 变化量与时间的比值，表示写入内存的块的总数',
                  },
                  {
                    TagName: 'RamDiskBlocksWriteFallback',
                    TagInfo: '写入内存但未成功的块总数（故障转移到磁盘）',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBlocksWriteFallback 变化量与时间的比值，表示写入内存但未成功的块总数（故障转移到磁盘）',
                  },
                  {
                    TagName: 'RamDiskBlocksDeletedBeforeLazyPersisted',
                    TagInfo: '应用程序在被保存到磁盘之前被删除的块的总数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBlocksDeletedBeforeLazyPersisted 变化量与时间的比值，表示应用程序在被保存到磁盘之前被删除的块的总数',
                  },
                  {
                    TagName: 'RamDiskBlocksReadHits',
                    TagInfo: '内存中的块被读取的总次数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBlocksReadHits 变化量与时间的比值，表示内存中的块被读取的总次数',
                  },
                  {
                    TagName: 'RamDiskBlocksEvicted',
                    TagInfo: '内存中被清除的块总数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBlocksEvicted 变化量与时间的比值，表示内存中被清除的块总数',
                  },
                  {
                    TagName: 'RamDiskBlocksEvictedWithoutRead',
                    TagInfo: '从内存中读取的内存中的块总数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBlocksEvictedWithoutRead 变化量与时间的比值，表示从内存中读取的内存中的块总数',
                  },
                  {
                    TagName: 'RamDiskBlocksLazyPersisted',
                    TagInfo: '惰性写入器写入磁盘的总数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBlocksLazyPersisted 变化量与时间的比值，表示惰性写入器写入磁盘的总数',
                  },
                  {
                    TagName: 'RamDiskBytesLazyPersisted',
                    TagInfo: '由懒惰写入器写入磁盘的总字节数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RamDiskBytesLazyPersisted 变化量与时间的比值，表示由懒惰写入器写入磁盘的总字节数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'RPC',
            MetricMetas: [
              {
                Name: 'HDFS.DN.BYTES',
                Unit: 'Bytes/s',
                Desc: '数据读写速率',
                Tags: [
                  {
                    TagName: 'BytesWrittenMB',
                    TagInfo: '写入 DN 的字节速率',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:BytesWrittenMB 变化量与时间的比值，表示与写入 DN 的字节速率',
                  },
                  {
                    TagName: 'BytesReadMB',
                    TagInfo: '读取 DN 的字节速率',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:BytesReadMB 变化量与时间的比值，表示读取 DN 的字节速率',
                  },
                  {
                    TagName: 'RemoteBytesReadMB',
                    TagInfo: '远程客户端读取字节速率',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RemoteBytesReadMB  变化量与时间的比值，表示远程客户端读取字节速率',
                  },
                  {
                    TagName: 'RemoteBytesWrittenMB',
                    TagInfo: '远程客户端写入字节速率',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:RemoteBytesWrittenMB  变化量与时间的比值，表示远程客户端写入字节速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.CLIENT',
                Unit: '个',
                Desc: '客户端连接数',
                Tags: [
                  {
                    TagName: 'WritesFromRemoteClient',
                    TagInfo: '来自远程客户端写操作 QPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:WritesFromRemoteClient  变化量，表示来自远程客户端写操作 QPS',
                  },
                  {
                    TagName: 'WritesFromLocalClient',
                    TagInfo: '来自本地客户端写操作 QPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:WritesFromLocalClient  变化量，表示来自本地客户端写操作 OPS',
                  },
                  {
                    TagName: 'ReadsFromRemoteClient',
                    TagInfo: '来自远程客户端读操作 QPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:ReadsFromRemoteClient 变化量，表示来自远程客户端读操作 QPS',
                  },
                  {
                    TagName: 'ReadsFromLocalClient',
                    TagInfo: '来自本地客户端读操作 QPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:ReadsFromLocalClient 变化量，表示来自本地客户端读操作 QPS',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.RT',
                Unit: 'ms',
                Desc: '读写耗时',
                Tags: [
                  {
                    TagName: 'Write',
                    TagInfo: '写操作耗时',
                    StatisticalMethod:
                      '数据来源 JMX DataNode,name=DataNodeActivity:TotalWriteTime 表示相邻两次采集周期差值,表示间隔内HDFS写操作耗时',
                  },
                  {
                    TagName: 'Read',
                    TagInfo: '读操作耗时',
                    StatisticalMethod:
                      '数据来源 JMX DataNode,name=DataNodeActivity:TotalReadTime 变化量与时间的比值，表示间隔时间内DHFS读操作耗时',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.XCEIVER',
                Unit: '个',
                Desc: 'XCEIVER数量',
                Tags: [
                  {
                    TagName: 'XceiverCount',
                    TagInfo: 'Xceiver 数量',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeInfo:XceiverCount，表示与NameNode或DataNode通信时的连接数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'Volume',
            MetricMetas: [
              {
                Name: 'HDFS.DN.VOLUME.FREESPACE',
                Unit: 'GB',
                Desc: '空闲磁盘容量',
                Tags: [
                  {
                    TagName: 'freeSpace',
                    TagInfo: '空闲磁盘容量',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeInfo:VolumeInfo.freeSpace，表示节点中空闲的磁盘容量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.VOLUME.NUMBLOCKS',
                Unit: '个',
                Desc: 'Block数量',
                Tags: [
                  {
                    TagName: 'numBlocks',
                    TagInfo: 'Block数量',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeInfo:VolumeInfo.numBlocks，表示节点中磁盘Block数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.VOLUME.REVERSEDSPACE',
                Unit: 'GB',
                Desc: '预留磁盘容量',
                Tags: [
                  {
                    TagName: 'reversedSpace',
                    TagInfo: '预留磁盘容量',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeInfo:VolumeInfo.reversedSpace，表示节点中预留的磁盘容量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.VOLUME.USEDSPACE',
                Unit: 'GB',
                Desc: '使用磁盘容量',
                Tags: [
                  {
                    TagName: 'usedSpace',
                    TagInfo: '使用磁盘容量',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeInfo:VolumeInfo.usedSpace，表示节点中已使用磁盘容量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '异常',
            MetricMetas: [
              {
                Name: 'HDFS.DN.BLOCKS_VERIFIED_FAILURES',
                Unit: '次',
                Desc: 'Block校验失败',
                Tags: [
                  {
                    TagName: 'BlockVerificationFailures',
                    TagInfo: 'BLOCK 校验失败数量',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:BlockVerificationFailures 变化量，表示BLOCK 校验失败数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.NETWORK.ERRORS',
                Unit: '次',
                Desc: '网络错误',
                Tags: [
                  {
                    TagName: 'DatanodeNetworkErrors',
                    TagInfo: '网络错误统计',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:DatanodeNetworkErrors 变化量，表示网络错误统计',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.VOLUME_FAILURES',
                Unit: '次',
                Desc: '磁盘故障',
                Tags: [
                  {
                    TagName: 'VolumeFailures',
                    TagInfo: '磁盘故障次数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:VolumeFailures 变化量，表示磁盘故障次数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '心跳',
            MetricMetas: [
              {
                Name: 'HDFS.DN.HB_OPS',
                Unit: '次/s',
                Desc: '心跳QPS',
                Tags: [
                  {
                    TagName: 'HeartbeatsNumOps',
                    TagInfo: '心跳接口 QPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:HeartbeatsNumOps 变化量与时间的比值，表示心跳接口 QPS',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.HB_RT',
                Unit: 'ms',
                Desc: '心跳延迟',
                Tags: [
                  {
                    TagName: 'HeartbeatsAvgTime',
                    TagInfo: '心跳接口平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:HeartbeatsAvgTime，表示心跳接口平均时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '操作',
            MetricMetas: [
              {
                Name: 'HDFS.DN.BLOCKS_OPS',
                Unit: '次/s',
                Desc: '数据块操作',
                Tags: [
                  {
                    TagName: 'ReadBlockOpNumOps',
                    TagInfo: '从 DataNode 读取 Block OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:ReadBlockOpNumOps 变化量与时间的比值，表示从 DataNode 读取 Block OPS',
                  },
                  {
                    TagName: 'WriteBlockOpNumOps',
                    TagInfo: '向 DataNode 写入 Block OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:WriteBlockOpNumOps 变化量与时间的比值，表示DataNode 进行 Checksum 操作的 OPS',
                  },
                  {
                    TagName: 'BlockChecksumOpNumOps',
                    TagInfo: 'DataNode 进行 Checksum 操作的 OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:BlockChecksumOpNumOps 变化量与时间的比值，表示DataNode 进行 Checksum 操作的 OPS',
                  },
                  {
                    TagName: 'CopyBlockOpNumOps',
                    TagInfo: '复制 Block 操作的 OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:CopyBlockOpNumOps 变化量与时间的比值，表示复制 Block 操作的 OPS',
                  },
                  {
                    TagName: 'ReplaceBlockOpNumOps',
                    TagInfo: 'Replace Block 操作的 OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:ReplaceBlockOpNumOps 变化量与时间的比值，表示Replace Block 操作的 OPS',
                  },
                  {
                    TagName: 'BlockReportsNumOps',
                    TagInfo: 'BLOCK 汇报动作的 OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:BlockReportsNumOps 变化量与时间的比值，表示BLOCK 汇报动作的 OPS',
                  },
                  {
                    TagName: 'IncrementalBlockReportsNumOps',
                    TagInfo: 'BLOCK 增量汇报的 OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:IncrementalBlockReportsNumOps 变化量与时间的比值，表示BLOCK 增量汇报的 OPS',
                  },
                  {
                    TagName: 'CacheReportsNumOps',
                    TagInfo: '缓存汇报的 OPS',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:CacheReportsNumOps 变化量与时间的比值，表示缓存汇报的 OPS',
                  },
                  {
                    TagName: 'PacketAckRoundTripTimeNanosNumOps',
                    TagInfo: '每秒处理 ACK ROUND TRIP 次数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:PacketAckRoundTripTimeNanosNumOps 变化量与时间的比值，表示每秒处理 ACK ROUND TRIP 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.BLOCKS_RT',
                Unit: 'ms',
                Desc: '数据块操作延迟统计',
                Tags: [
                  {
                    TagName: 'ReadBlockOpAvgTime',
                    TagInfo: '读取 Block 操作平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:ReadBlockOpAvgTime 变化量与时间的比值，表示读取 Block 操作平均时间',
                  },
                  {
                    TagName: 'WriteBlockOpAvgTime',
                    TagInfo: '写 Blcok 操作平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:WriteBlockOpAvgTime 变化量与时间的比值，表示写 Blcok 操作平均时间',
                  },
                  {
                    TagName: 'BlockChecksumOpAvgTime',
                    TagInfo: '块校验操作平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:BlockChecksumOpAvgTime变化量与时间的比值，表示块校验操作平均时间',
                  },
                  {
                    TagName: 'CopyBlockOpAvgTime',
                    TagInfo: '复制快操作平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:CopyBlockOpAvgTime 变化量与时间的比值，表示复制快操作平均时间',
                  },
                  {
                    TagName: 'ReplaceBlockOpAvgTime',
                    TagInfo: 'Replace Block 操作平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:ReplaceBlockOpAvgTime 变化量与时间的比值，表示Replace Block 操作平均时间',
                  },
                  {
                    TagName: 'BlockReportsAvgTime',
                    TagInfo: '块汇报平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:BlockReportsAvgTime 变化量与时间的比值，表示块汇报平均时间',
                  },
                  {
                    TagName: 'IncrementalBlockReportsAvgTime',
                    TagInfo: '增量块汇报平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:IncrementalBlockReportsAvgTime 变化量与时间的比值，表示增量块汇报平均时间',
                  },
                  {
                    TagName: 'CacheReportsAvgTime',
                    TagInfo: '缓存汇报平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:CacheReportsAvgTime 变化量与时间的比值，表示缓存汇报平均时间',
                  },
                  {
                    TagName: 'PacketAckRoundTripTimeNanosAvgTime',
                    TagInfo: '处理 ACK ROUND TRIP 平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:PacketAckRoundTripTimeNanosAvgTime 变化量与时间的比值，表示处理 ACK ROUND TRIP 平均时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.FLUSH_OPS',
                Unit: '次/s',
                Desc: 'FLUSH操作',
                Tags: [
                  {
                    TagName: 'FlushNanosNumOps',
                    TagInfo: '每秒处理 Flush 操作次数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:FlushNanosNumOps 变化量与时间的比值，表示每秒处理 Flush 操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.FLUSH_RT',
                Unit: 'ms',
                Desc: 'FLUSH延迟',
                Tags: [
                  {
                    TagName: 'FlushNanosAvgTime',
                    TagInfo: 'Flush 操作平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:FlushNanosAvgTime 变化量与时间的比值，表示Flush 操作平均时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.FSYNC_OPS',
                Unit: '次/s',
                Desc: 'FSYNC操作',
                Tags: [
                  {
                    TagName: 'FsyncNanosNumOps',
                    TagInfo: '每秒处理 FSYNC 操作次数',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:FsyncNanosNumOps 变化量与时间的比值，表示每秒处理 Fsync 操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.FSYNC_RT',
                Unit: 'ms',
                Desc: 'FSYNC延迟',
                Tags: [
                  {
                    TagName: 'FsyncNanosAvgTime',
                    TagInfo: 'Fsync 操作平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:FsyncNanosAvgTime 变化量与时间的比值，表示Fsync 操作平均时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '数据块传输',
            MetricMetas: [
              {
                Name: 'HDFS.DN.DATAPACKET.AVGTIME',
                Unit: 'ms',
                Desc: '包传输操作RT',
                Tags: [
                  {
                    TagName: 'SendDataPacketTransferNanosAvgTime',
                    TagInfo: '发送数据包平均时间',
                    StatisticalMethod:
                      '数据来源 JMX DataNodeActivity:SendDataPacketTransferNanosAvgTime，表示发送数据包平均时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.DATAPACKET.OPS',
                Unit: '次/s',
                Desc: '包传输操作QPS',
                Tags: [
                  {
                    TagName: 'DataPacketOps',
                    TagInfo: '包传输操作QPS',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:DataPacketOps 变化量与时间的比值，表示包传输操作QPS',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HDFS.DN.START_TIME',
                Unit: 's',
                Desc: '启动时间',
                Tags: [
                  {
                    TagName: 'StartTime',
                    TagInfo: '进程启动时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:StartTime 变化量与时间的比值，表示进程启动时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.THREAD_COUNT',
                Unit: '个',
                Desc: '线程数量',
                Tags: [
                  {
                    TagName: 'PeckThreadCount',
                    TagInfo: '峰值线程数量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:PeckThreadCount 变化量与时间的比值，表示峰值线程数量',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:DaemonThreadCount 变化量与时间的比值，表示后台线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DN.THREAD_TIME',
                Unit: 'ms',
                Desc: 'CPU时间',
                Tags: [
                  {
                    TagName: 'CurrentThreadSystemTime',
                    TagInfo: '系统时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:CurrentThreadSystemTime ，表示系统时间',
                  },
                  {
                    TagName: 'CurrentThreadUserTime',
                    TagInfo: '用户时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4004:CurrentThreadUserTime ，表示用户时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'JournalNode',
        Groups: [
          {
            Title: '4005端口',
            MetricMetas: [
              {
                Name: 'HDFS.JN.PORT4005.AUTH',
                Unit: '次',
                Desc: '验证和授权',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC 验证失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationFailures，表示RPC 验证失败次数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC 验证成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationSuccesses，表示RPC 验证成功次数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC 授权失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationFailures，表示RPC 授权失败次数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC 授权成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationSuccesses，表示RPC 授权成功次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.PORT4005.CONNECTIONS',
                Unit: '个',
                Desc: '当前连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前连接数量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:NumOpenConnections，表示当前链接数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.PORT4005.QPS',
                Unit: '次/s',
                Desc: 'QPS',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 调用速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeNumOps，表示RPC 调用速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.PORT4005.QUEUE_LEN',
                Unit: '1',
                Desc: 'RPC处理队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前 RPC 处理队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:CallQueueLength，表示当前 RPC 处理队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.PORT4005.RT',
                Unit: 'ms',
                Desc: '请求处理延迟',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeAvgTime，表示RPC 平均延迟时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.PORT4005.RXTX',
                Unit: 'KB/s',
                Desc: '数据流量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: '接收数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:ReceivedBytes，表示接收数据速率',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: '发送数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:SentBytes，表示发送数据速率',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HDFS.JN.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC 次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC 时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.JVM.JAVA_THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '处于 NEW 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '处于 RUNNABLE 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '处于 BLOCKED 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '处于 WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '处于 TIMED WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '处于 Terminated 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.JVM.LOG_TOTAL',
                Unit: '条',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal 变化量，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError 变化量，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn 变化量，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo 变化量，表示INFO日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 配置的 NonHeapCommittedM 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM HeapMemory 提交大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: 'JVM 运行时的可以使用的最大的内存的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示JVM 运行时的可以使用的最大的内存的大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HDFS.JN.START_TIME',
                Unit: 's',
                Desc: '启动时间',
                Tags: [
                  {
                    TagName: 'StartTime',
                    TagInfo: '进程启动时间',
                    StatisticalMethod:
                      '数据来源 JMX Threading:StartTime，表示进程启动时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.THREAD_COUNT',
                Unit: '个',
                Desc: '线程数量',
                Tags: [
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:ThreadCount，表示线程数量',
                  },
                  {
                    TagName: 'PeckThreadCount',
                    TagInfo: '峰值线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:PeckThreadCount，表示峰值线程数量',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:DaemonThreadCount，表示后台线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.JN.THREAD_TIME',
                Unit: 'ms',
                Desc: 'CPU时间',
                Tags: [
                  {
                    TagName: 'CurrentThreadCpuTime',
                    TagInfo: '系统时间',
                    StatisticalMethod:
                      '数据来源 JMX Threading:CurrentThreadCpuTime，表示系统时间',
                  },
                  {
                    TagName: 'CurrentThreadUserTime',
                    TagInfo: '用户时间',
                    StatisticalMethod:
                      '数据来源 JMX Threading:CurrentThreadUserTime，表示用户时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'NameNode',
        Groups: [
          {
            Title: '4007端口',
            MetricMetas: [
              {
                Name: 'HDFS.NN.PORT4007.AUTH',
                Unit: '次',
                Desc: '验证和授权',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC 验证失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:RpcAuthenticationFailures 变化量，表示采样间隔内sasl请求认证失败次数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC 验证成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:RpcAuthenticationSuccesses 变化量，表示采样间隔内sasl请求认证成功次数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC 授权失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:RpcAuthorizationFailures 变化量，表示采样间隔内请求授权失败次数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC 授权成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:RpcAuthorizationSuccesses 变化量，表示采样间隔内请求授权成功次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.AVGTIME1',
                Unit: 'ms',
                Desc: 'RPC平均时间(1)',
                Tags: [
                  {
                    TagName: 'CompleteAvgTime',
                    TagInfo: 'Complete请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:CompleteAvgTime,表示 Complete 请求平均延迟时间.',
                  },
                  {
                    TagName: 'CreateAvgTime',
                    TagInfo: 'Create请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:CreateAvgTime,表示 Create 请求平均延迟时间.',
                  },
                  {
                    TagName: 'RenameAvgTime',
                    TagInfo: 'Rename请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:RenameAvgTime,表示 Rename 请求平均延迟时间.',
                  },
                  {
                    TagName: 'AddBlockAvgTime',
                    TagInfo: 'AddBlock请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:AddBlockAvgTime,表示 AddBlock 请求平均延迟时间.',
                  },
                  {
                    TagName: 'GetListingAvgTime',
                    TagInfo: 'GetListing请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetListingAvgTime,表示 GetListing 请求平均延迟时间.',
                  },
                  {
                    TagName: 'GetFileInfoAvgTime',
                    TagInfo: 'GetFileInfo请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetFileInfoAvgTime,表示 GetFileInfo 请求平均延迟时间.',
                  },
                  {
                    TagName: 'SendHeartbeatAvgTime',
                    TagInfo: 'SendHeartbeat请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SendHeartbeatAvgTime,表示 SendHeartbeat 请求平均延迟时间.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.AVGTIME2',
                Unit: 'ms',
                Desc: 'RPC平均时间(2)',
                Tags: [
                  {
                    TagName: 'RegisterDatanodeAvgTime',
                    TagInfo: 'RegisterDatanode请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:RegisterDatanodeAvgTime,表示 RegisterDatanode 请求平均延迟时间.',
                  },
                  {
                    TagName: 'BlockReportAvgTime',
                    TagInfo: 'BlockReport请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:BlockReportAvgTime,表示 BlockReport 请求平均延迟时间.',
                  },
                  {
                    TagName: 'DeleteAvgTime',
                    TagInfo: 'Delete请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:DeleteAvgTime,表示 Delete 请求平均延迟时间.',
                  },
                  {
                    TagName: 'RenewLeaseAvgTime',
                    TagInfo: 'RenewLease请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:RenewLeaseAvgTime,表示 RenewLease 请求平均延迟时间.',
                  },
                  {
                    TagName: 'BlockReceivedAndDeletedAvgTime',
                    TagInfo: 'BlockReceivedAndDeleted请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:BlockReceivedAndDeletedAvgTime,表示 BlockReceivedAndDeleted 请求平均延迟时间.',
                  },
                  {
                    TagName: 'FsyncAvgTime',
                    TagInfo: 'Fsync请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:FsyncAvgTime,表示 Fsync 请求平均延迟时间.',
                  },
                  {
                    TagName: 'VersionRequestAvgTime',
                    TagInfo: 'VersionRequest请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:VersionRequestAvgTime,表示 VersionRequest 请求平均延迟时间.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.AVGTIME3',
                Unit: 'ms',
                Desc: 'RPC平均时间(3)',
                Tags: [
                  {
                    TagName: 'ListEncryptionZonesAvgTime',
                    TagInfo: 'ListEncryptionZones请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:ListEncryptionZonesAvgTime,表示 ListEncryptionZones 请求平均延迟时间.',
                  },
                  {
                    TagName: 'SetPermissionAvgTime',
                    TagInfo: 'SetPermission请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SetPermissionAvgTime,表示 SetPermission 请求平均延迟时间.',
                  },
                  {
                    TagName: 'SetTimesAvgTime',
                    TagInfo: 'SetTimes请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SetTimesAvgTime,表示 SetTimes 请求平均延迟时间.',
                  },
                  {
                    TagName: 'SetSafeModeAvgTime',
                    TagInfo: 'SetSafeMode请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SetSafeModeAvgTime,表示 SetSafeMode 请求平均延迟时间.',
                  },
                  {
                    TagName: 'MkdirsAvgTime',
                    TagInfo: 'Mkdirs请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:MkdirsAvgTime,表示 Mkdirs 请求平均延迟时间.',
                  },
                  {
                    TagName: 'GetServerDefaultsAvgTime',
                    TagInfo: 'GetServerDefaults请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetServerDefaultsAvgTime,表示 GetServerDefaults 请求平均延迟时间.',
                  },
                  {
                    TagName: 'GetBlockLocationsAvgTime',
                    TagInfo: 'GetBlockLocations请求平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetBlockLocationsAvgTime,表示 GetBlockLocations 请求平均延迟时间.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.CONNECTIONS',
                Unit: '个 ',
                Desc: '当前连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前连接数量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:NumOpenConnections，表示当前Rpc连接数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.NUMOPS1',
                Unit: '次/s',
                Desc: 'RPC统计(1)',
                Tags: [
                  {
                    TagName: 'CompleteNumOps',
                    TagInfo: '每秒调用Complete的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:CompleteNumOps,表示采样间隔内调用 Complete 的次数.',
                  },
                  {
                    TagName: 'CreateNumOps',
                    TagInfo: '每秒调用Create的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:CreateNumOps,表示采样间隔内调用 Create 的次数.',
                  },
                  {
                    TagName: 'RenameNumOps',
                    TagInfo: '每秒调用Rename的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:RenameNumOps,表示采样间隔内调用 Rename 的次数.',
                  },
                  {
                    TagName: 'AddBlockNumOps',
                    TagInfo: '每秒调用AddBlock的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:AddBlockNumOps,表示采样间隔内调用 AddBlock 的次数.',
                  },
                  {
                    TagName: 'GetListingNumOps',
                    TagInfo: '每秒调用GetListing的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetListingNumOps,表示采样间隔内调用 GetListing 的次数.',
                  },
                  {
                    TagName: 'GetFileInfoNumOps',
                    TagInfo: '每秒调用GetFileInfo的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetFileInfoNumOps,表示采样间隔内调用 GetFileInfo 的次数.',
                  },
                  {
                    TagName: 'SendHeartbeatNumOps',
                    TagInfo: '每秒调用SendHeartbeat的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SendHeartbeatNumOps,表示采样间隔内调用 SendHeartbeat 的次数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.NUMOPS2',
                Unit: '次/s',
                Desc: 'RPC统计(2)',
                Tags: [
                  {
                    TagName: 'RegisterDatanodeNumOps',
                    TagInfo: '每秒调用RegisterDatanode的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:RegisterDatanodeNumOps,表示采样间隔内调用 RegisterDatanode 的次数.',
                  },
                  {
                    TagName: 'BlockReportNumOps',
                    TagInfo: '每秒调用BlockReport的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:BlockReportNumOps,表示采样间隔内调用 BlockReport 的次数.',
                  },
                  {
                    TagName: 'DeleteNumOps',
                    TagInfo: '每秒调用Delete的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:DeleteNumOps,表示采样间隔内调用 Delete 的次数.',
                  },
                  {
                    TagName: 'RenewLeaseNumOps',
                    TagInfo: '每秒调用RenewLease的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:RenewLeaseNumOps,表示采样间隔内调用 RenewLease 的次数.',
                  },
                  {
                    TagName: 'BlockReceivedAndDeletedNumOps',
                    TagInfo: '每秒调用BlockReceivedAndDeleted的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:BlockReceivedAndDeletedNumOps,表示采样间隔内调用 BlockReceivedAndDeleted 的次数.',
                  },
                  {
                    TagName: 'FsyncNumOps',
                    TagInfo: '每秒调用Fsync的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:FsyncNumOps,表示采样间隔内调用 Fsync 的次数.',
                  },
                  {
                    TagName: 'VersionRequestNumOps',
                    TagInfo: '每秒调用VersionRequest的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:VersionRequestNumOps,表示采样间隔内调用 VersionRequest 的次数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.NUMOPS3',
                Unit: '次/s',
                Desc: 'RPC统计(3)',
                Tags: [
                  {
                    TagName: 'ListEncryptionZonesNumOps',
                    TagInfo: '每秒调用ListEncryptionZones的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:ListEncryptionZonesNumOps,表示采样间隔内调用 ListEncryptionZones 的次数.',
                  },
                  {
                    TagName: 'SetPermissionNumOps',
                    TagInfo: '每秒调用SetPermission的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SetPermissionNumOps,表示采样间隔内调用 SetPermission 的次数.',
                  },
                  {
                    TagName: 'SetTimesNumOps',
                    TagInfo: '每秒调用SetTimes的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SetTimesNumOps,表示采样间隔内调用 SetTimes 的次数.',
                  },
                  {
                    TagName: 'SetSafeModeNumOps',
                    TagInfo: '每秒调用SetSafeMode的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:SetSafeModeNumOps,表示采样间隔内调用 SetSafeMode 的次数.',
                  },
                  {
                    TagName: 'MkdirsNumOps',
                    TagInfo: '每秒调用Mkdirs的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:MkdirsNumOps,表示采样间隔内调用 Mkdirs 的次数.',
                  },
                  {
                    TagName: 'GetServerDefaultsNumOps',
                    TagInfo: '每秒调用GetServerDefaults的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetServerDefaultsNumOps,表示采样间隔内调用 GetServerDefaults 的次数.',
                  },
                  {
                    TagName: 'GetBlockLocationsNumOps',
                    TagInfo: '每秒调用GetBlockLocations的次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcDetailedActivityForPort4007:GetBlockLocationsNumOps,表示采样间隔内调用 GetBlockLocations 的次数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.QPS',
                Unit: '次/s',
                Desc: 'QPS',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 调用速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:RpcQueueTimeNumOps 变化量与时间的比值，表示每秒请求的次数，',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.QUEUE_LEN',
                Unit: '1',
                Desc: 'RPC处理队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前 RPC 处理队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:CallQueueLength，表示当前Rpc处理队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.RT',
                Unit: 'ms',
                Desc: '请求处理延迟',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:RpcQueueTimeAvgTime，表示请求在RPC队列中的平均时间',
                  },
                  {
                    TagName: 'RpcProcessingTimeAvgTime',
                    TagInfo: 'RPC 请求平均处理时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:RpcProcessingTimeAvgTime，表示RPC 请求平均处理时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PORT4007.RXTX',
                Unit: 'Bytes/s',
                Desc: '数据流量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: '接收数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RPCActivityForPort4007:ReceivedBytes 变化量与时间的比值，表示每秒收到RPC请求的字节数',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: '发送数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RPCActivityForPort4007:SentBytes 变化量与时间的比值，表示每秒发送RPC请求的字节数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'Blocks',
            MetricMetas: [
              {
                Name: 'HDFS.NAMENODE.BLOCKS',
                Unit: '个',
                Desc: 'BLOCKS数量',
                Tags: [
                  {
                    TagName: 'BlocksTotal',
                    TagInfo: '总 BLOCK 数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:BlocksTotal，表示已分配的数据块总数',
                  },
                  {
                    TagName: 'PendingReplicationBlocks',
                    TagInfo: '等待被备份的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:PendingReplicationBlocks，表示等待被备份的块数量',
                  },
                  {
                    TagName: 'UnderReplicatedBlocks',
                    TagInfo: '副本数不够的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:UnderReplicatedBlocks，表示副本数不够的块数量',
                  },
                  {
                    TagName: 'CorruptBlocks',
                    TagInfo: '坏块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:CorruptBlocks，表示坏块数量',
                  },
                  {
                    TagName: 'ScheduledReplicationBlocks',
                    TagInfo: '安排要备份的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:ScheduledReplicationBlocks，表示安排要备份的块数量',
                  },
                  {
                    TagName: 'PendingDeletionBlocks',
                    TagInfo: '等待被删除的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:PendingDeletionBlocks，表示等待被删除的块数量',
                  },
                  {
                    TagName: 'ExcessBlocks',
                    TagInfo: '多于的块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:ExcessBlocks，表示多余的块数量',
                  },
                  {
                    TagName: 'PostponedMisreplicatedBlocks',
                    TagInfo: '被推迟处理的异常块数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:PostponedMisreplicatedBlocks，表示被推迟处理的异常块数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HDFS.NN.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC 次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC 时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.JVM.JAVA_THREADS',
                Unit: 'MB',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '处于 NEW 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '处于 RUNNABLE 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '处于 BLOCKED 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '处于 WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '处于 TIMED WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '处于 Terminated 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.JVM.LOG_TOTAL',
                Unit: '次',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal 变化量，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError 变化量，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn 变化量，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo 变化量，表示INFO日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 配置的 NonHeapCommittedM 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM HeapMemory 提交大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: 'JVM 运行时的可以使用的最大的内存的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示JVM 运行时的可以使用的最大的内存的大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '异常',
            MetricMetas: [
              {
                Name: 'HDFS.NN.BLOCKS_MISSING',
                Unit: '个',
                Desc: '缺失块统计',
                Tags: [
                  {
                    TagName: 'NumberOfMissingBlocks',
                    TagInfo: '缺失的数据块数量',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeInfo:NumberOfMissingBlocks，表示缺失的数据块数量',
                  },
                  {
                    TagName: 'NumberOfMissingBlocksWithReplicationFactorOne',
                    TagInfo: '缺失的数据块数量（rf = 1）',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeInfo:NumberOfMissingBlocksWithReplicationFactorOne，表示缺失且副本数为1的数据块数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.PENDING_DATANODE_MESSAGE_COUNT',
                Unit: '个/s',
                Desc: '备NN上挂起的与BLOCK相关操作的消息数量',
                Tags: [
                  {
                    TagName: 'PendingDataNodeMessageCount',
                    TagInfo:
                      'DATANODE 的请求被 QUEUE 在 standby namenode 中的个数',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:PendingDataNodeMessageCount 变化量，表示standby namenode 待处理的DataNode的请求个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.STALE_STORAGES_COUNT',
                Unit: '个',
                Desc: '被标记为过期的存储的数量',
                Tags: [
                  {
                    TagName: 'NumStaleStorages',
                    TagInfo: '所有过期DataNode的存储目总数',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystemState:NumStaleStorages，表示处于过期状态的DataNode的Storage总数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '操作',
            MetricMetas: [
              {
                Name: 'HDFS.NN.BLOCK_REPORT_OPS',
                Unit: '次/s',
                Desc: '数据块汇报',
                Tags: [
                  {
                    TagName: 'BlockReportNumQps',
                    TagInfo: '每秒处理 DataNode Blcok 上报操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:BlockReportNumQps 变化量与时间的比值，表示每秒处理 DataNode Blcok 上报操作的次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.BLOCK_REPORT_RT',
                Unit: 'ms',
                Desc: '数据块汇报延迟',
                Tags: [
                  {
                    TagName: 'BlockReportAvgTime',
                    TagInfo: '每秒处理 DataNode Blcok 平均延迟',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4007:BlockReportAvgTime，表示处理DataNode块上报请求的平均处理时延',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.BLOCKS_OPS',
                Unit: '次/s',
                Desc: '数据块操作',
                Tags: [
                  {
                    TagName: 'BlockReceivedAndDeletedOps',
                    TagInfo: '每秒执行 BlockReceivedAndDeletedOps 的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:BlockReceivedAndDeletedOps 变化量与时间的比值，表示每秒新接收的或者已删除的数据块操作次数',
                  },
                  {
                    TagName: 'BlockOpsQueued',
                    TagInfo: '处理 DataNode Block 上报操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:BlockReceivedAndDeletedOps 变化量与时间的比值，表示每秒数据块上报处理操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.CACHE_REPORT_OPS',
                Unit: '次/s',
                Desc: '缓存汇报',
                Tags: [
                  {
                    TagName: 'CacheReportNumOps',
                    TagInfo: '每秒处理 CacheReport 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:CacheReportNumOps 变化量与时间的比值，表示每秒处理 CacheReport 操作的次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.CACHE_REPORT_RT',
                Unit: 'ms',
                Desc: 'Cache汇报延迟',
                Tags: [
                  {
                    TagName: 'CacheReportAvgTime',
                    TagInfo: '缓存上报动作平均延迟',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:CacheReportAvgTime，表示缓存上报动作平均延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.FILES',
                Unit: 'count/s',
                Desc: '文件统计',
                Tags: [
                  {
                    TagName: 'FilesDeleted',
                    TagInfo: '文件和文件夹被删除或重命名的数量',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:FilesDeleted，表示文件和文件夹被删除或重命名的数量.',
                  },
                  {
                    TagName: 'FilesCreated',
                    TagInfo: '文件和文件夹创建数量',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:FilesCreated，表示文件和文件夹创建数量.',
                  },
                  {
                    TagName: 'FilesAppended',
                    TagInfo: 'Appended 文件数量',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:FilesAppended，表示追加文件数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.FILES_OPS',
                Unit: '次/s',
                Desc: '文件操作',
                Tags: [
                  {
                    TagName: 'CreateFileOps',
                    TagInfo: '每秒执行 CreateFile 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:CreateFileOps 变化量与时间的比值，表示每秒创建文件或目录操作次数',
                  },
                  {
                    TagName: 'GetListingOps',
                    TagInfo: '每秒执行 GetListing 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:GetListingOps 变化量与时间的比值，表示每秒查看文件系统操作次数',
                  },
                  {
                    TagName: 'TotalFileOps',
                    TagInfo: '每秒执行 文件系统主要操作 的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:TotalFileOps 变化量与时间的比值，表示每秒文件系统主要操作次数，包括创建、重命名、删除等操作',
                  },
                  {
                    TagName: 'DeleteFileOps',
                    TagInfo: '每秒执行 DeleteFile 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:DeleteFileOps 变化量与时间的比值，表示每秒删除操作次数',
                  },
                  {
                    TagName: 'FileInfoOps',
                    TagInfo: '每秒执行 FileInfo 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:FileInfoOps 变化量与时间的比值，表示每秒获取文件或目录属性操作次数',
                  },
                  {
                    TagName: 'GetAdditionalDatanodeOps',
                    TagInfo: '每秒执行 GetAdditionalDatanode 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:GetAdditionalDatanodeOps 变化量与时间的比值，表示每秒GetAdditionalDatanode操作次数',
                  },
                  {
                    TagName: 'CreateSymlinkOps',
                    TagInfo: '每秒执行 CreateSymlink 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:CreateSymlinkOps 变化量与时间的比值，表示每秒创建符号链接操作次数',
                  },
                  {
                    TagName: 'GetLinkTargetOps',
                    TagInfo: '每秒执行 GetLinkTarget 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:GetLinkTargetOps 变化量与时间的比值，表示每秒获取符号链接操作次数',
                  },
                  {
                    TagName: 'FilesInGetListingOps',
                    TagInfo: '每秒执行 FilesInGetListing 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:FilesInGetListingOps 变化量与时间的比值，表示每秒列举文件或目录操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.IMAGE_OPS',
                Unit: '次/s',
                Desc: '镜像操作',
                Tags: [
                  {
                    TagName: 'GetEditNumOps',
                    TagInfo: '每秒执行 GetEditNumOps 的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:GetEditNumOps 变化量与时间的比值，表示每秒调用读取Edit文件操作次数',
                  },
                  {
                    TagName: 'GetImageNumOps',
                    TagInfo: '每秒执行 GetImageNumOps 的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:GetImageNumOps 变化量与时间的比值，表示每秒调用读取镜像文件操作次数',
                  },
                  {
                    TagName: 'PutImageNumOps',
                    TagInfo: '每秒执行 PutImageNumOps 的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:PutImageNumOps 变化量与时间的比值，表示每秒调用写入镜像文件操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.IMAGE_RT',
                Unit: 'ms',
                Desc: '镜像操作延迟',
                Tags: [
                  {
                    TagName: 'GetEditAvgTime',
                    TagInfo: '读取 Edit 文件操作平均延迟',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:GetEditAvgTime，表示读取 Edit 文件操作平均延迟',
                  },
                  {
                    TagName: 'GetImageAvgTime',
                    TagInfo: '读取镜像文件平均延迟',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:GetImageAvgTime，表示读取镜像文件平均延迟',
                  },
                  {
                    TagName: 'PutImageAvgTime',
                    TagInfo: '写入镜像文件平均延迟',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:PutImageAvgTime，表示写入镜像文件平均延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.LOCKQUEUE',
                Unit: 'count',
                Desc: '等待文件锁的队列长度',
                Tags: [
                  {
                    TagName: 'LockQueueLength',
                    TagInfo: '等待文件锁的队列长度',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:LockQueueLength,表示等待获取文件锁的线程数量.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.SNAPSHOT_OPS',
                Unit: '次/s',
                Desc: 'SNAPSHOT操作',
                Tags: [
                  {
                    TagName: 'AllowSnapshotOps',
                    TagInfo: '每秒执行 AllowSnapshot 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:AllowSnapshotOps 变化量与时间的比值，表示每秒执行 开启Snapshot 操作的次数',
                  },
                  {
                    TagName: 'DisallowSnapshotOps',
                    TagInfo: '每秒执行 DisallowSnapshot 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:DisallowSnapshotOps 变化量与时间的比值，表示每秒执行 关闭Snapshot 操作的次数',
                  },
                  {
                    TagName: 'CreateSnapshotOps',
                    TagInfo: '每秒执行 CreateSnapshot 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:CreateSnapshotOps 变化量与时间的比值，表示每秒执行 创建Snapshot 操作的次数',
                  },
                  {
                    TagName: 'DeleteSnapshotOps',
                    TagInfo: '每秒执行 DeleteSnapshot 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:DeleteSnapshotOps 变化量与时间的比值，表示每秒 删除Snapshot操作次数',
                  },
                  {
                    TagName: 'ListSnapshottableDirOps',
                    TagInfo: '每秒执行 ListSnapshottableDir 操作次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:ListSnapshottableDirOps 变化量与时间的比值，表示每秒列举Snapshot操作次数',
                  },
                  {
                    TagName: 'SnapshotDiffReportOps',
                    TagInfo: '每秒执行 SnapshotDiffReportOps 的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:SnapshotDiffReportOps 变化量与时间的比值，表示每秒比较两个Snapshot差异操作次数',
                  },
                  {
                    TagName: 'RenameSnapshotOps',
                    TagInfo: '每秒执行 RenameSnapshotOps 的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:RenameSnapshotOps 变化量与时间的比值，表示每秒重命名Snapshot操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.SYNCS_OPS',
                Unit: '次/s',
                Desc: 'SYNC操作',
                Tags: [
                  {
                    TagName: 'SyncsNumOps',
                    TagInfo: '每秒处理 Journal Syncs 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:SyncsNumOps 变化量与时间的比值，表示每秒Journal Syncs 操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.SYNCS_RT',
                Unit: 'ms',
                Desc: 'SYNCS操作延迟',
                Tags: [
                  {
                    TagName: 'SyncsAvgTime',
                    TagInfo: '处理 Journal Syncs 操作的平均延迟',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:SyncsAvgTime，表示处理 Journal Syncs 操作的平均延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.TRANSACTION_OPS',
                Unit: '次/s',
                Desc: '事务操作',
                Tags: [
                  {
                    TagName: 'TransactionsNumOps',
                    TagInfo: '每秒处理 Journal Transaction 操作的次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:TransactionsNumOps 变化量与时间的比值，表示每秒处理 Journal Transaction 操作次数',
                  },
                  {
                    TagName: 'TransactionsBatchedInSync',
                    TagInfo: '每秒批量处理 Journal transaction 操作次数',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:TransactionsBatchedInSync 变化量与时间的比值，表示每秒批量处理 Journal Transaction 操作次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.TRANSACTION_RT',
                Unit: 'ms',
                Desc: '事务操作延迟',
                Tags: [
                  {
                    TagName: 'TransactionsAvgTime',
                    TagInfo: '处理 Journal Transaction 操作的平均延迟',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeActivity:TransactionsAvgTime，表示处理 Journal Transaction 操作的平均延迟',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '文件',
            MetricMetas: [
              {
                Name: 'HDFS.NAMENODE.FILES.TOTAL',
                Unit: '个',
                Desc: '文件数量',
                Tags: [
                  {
                    TagName: 'FilesTotal',
                    TagInfo: '总文件数量',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:FilesTotal，表示目录树中所有目录节点和文件节点的总和',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '检查点 ',
            MetricMetas: [
              {
                Name: 'HDFS.NN.CHECKPOINTTIME',
                Unit: 'ms',
                Desc: 'LastCheckpoint时间',
                Tags: [
                  {
                    TagName: 'LastCheckpointTime',
                    TagInfo: '上次Checkpoint以来的时间',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:LastCheckpointTime,上次检查点以来时间.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.TRANSACTIONS',
                Unit: 'count',
                Desc: '上次Checkpoint以来事务总数',
                Tags: [
                  {
                    TagName: 'SinceLastCheckpoint',
                    TagInfo: '上次Checkpoint以来事务总数',
                    StatisticalMethod:
                      '数据来源 JMX FSNamesystem:TransactionsSinceLastCheckpoin,自上次检查点以来的总事务数.',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HDFS.NN.START_TIME',
                Unit: 'ms',
                Desc: '启动时间',
                Tags: [
                  {
                    TagName: 'StartTime',
                    TagInfo: '进程启动时间',
                    StatisticalMethod:
                      '数据来源 JMX Runtime:StartTime，表示进程启动时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.STATE',
                Unit: '1:主,0:备',
                Desc: '主备情况',
                Tags: [
                  {
                    TagName: 'State',
                    TagInfo: 'NN HA状态',
                    StatisticalMethod:
                      '数据来源 JMX NameNodeStatus:State，表示NameNode主备状态',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.NN.THREAD_COUNT',
                Unit: '个',
                Desc: '线程数量',
                Tags: [
                  {
                    TagName: 'PeakThreadCount',
                    TagInfo: '峰值线程数',
                    StatisticalMethod:
                      '数据来源 JMX Threading:PeakThreadCount，表示峰值线程数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:ThreadCount，表示线程数量',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:DaemonThreadCount，表示处理 Journal Transaction 操作的平均延迟',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'ZKFailoverController',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HDFS.DFZK.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC 次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DFZK.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC 时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DFZK.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'DFSRouter',
        Groups: [
          {
            Title: '4013端口',
            MetricMetas: [
              {
                Name: 'HDFS.DFSROUTER.PORT4013.AUTH',
                Unit: '次',
                Desc: '验证和授权',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC 验证失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:RpcAuthenticationFailures 变化量与时间的比值，表示RPC 验证失败次数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC 验证成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:RpcAuthenticationSuccesses 变化量与时间的比值，表示RPC 验证成功次数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC 授权失败次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:RpcAuthorizationFailures 变化量与时间的比值，表示RPC 授权失败次数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC 授权成功次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:RpcAuthorizationSuccesses 变化量与时间的比值，表示RPC 授权成功次数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.PORT4013.CONNECTIONS',
                Unit: '个',
                Desc: '当前连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前连接数量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:NumOpenConnections 变化量与时间的比值，表示当前连接数量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.PORT4013.QPS',
                Unit: '次/s',
                Desc: 'QPS',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 调用速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:RpcQueueTimeNumOps 变化量与时间的比值，表示RPC 调用速率',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.PORT4013.QUEUE_LEN',
                Unit: '1',
                Desc: 'RPC处理队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前 RPC 处理队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:CallQueueLength 变化量与时间的比值，表示当前 RPC 处理队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DFSROUTER.PORT4013.RT',
                Unit: 'ms',
                Desc: '请求处理延迟',
                Tags: [
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 平均延迟时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:RpcQueueTimeAvgTime 变化量与时间的比值，表示RPC 平均延迟时间',
                  },
                  {
                    TagName: 'RpcProcessingTimeAvgTime',
                    TagInfo: 'RPC 请求平均处理时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:RpcProcessingTimeAvgTime，表示RPC 请求平均处理时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DFSROUTER.PORT4013.RXTX',
                Unit: 'KB/s',
                Desc: '数据流量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: '接收数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:ReceivedBytes 变化量与时间的比值，表示接收数据速率',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: '发送数据速率',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort4013:SentBytes 变化量与时间的比值，表示发送数据速率',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HDFS.DFSROUTER.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC 次数',
                Tags: [
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC 时间',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.JVM.LOG_TOTAL',
                Unit: '条',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal 变化量，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError 变化量，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn 变化量，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo 变化量，表示INFO日志数量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 配置的 NonHeapCommittedM 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM HeapMemory 提交大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: 'JVM 运行时的可以使用的最大的内存的大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示JVM 的内存大小',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DFSROUTER.JVM.THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '处于 NEW 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '处于 RUNNABLE 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '处于 BLOCKED 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '处于 WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '处于 TIMED WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '处于 Terminated 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: 'RBF',
            MetricMetas: [
              {
                Name: 'HDFS.DFSROUTER.RBF.FILES',
                Unit: '个',
                Desc: '文件数量',
                Tags: [
                  {
                    TagName: 'NumFiles',
                    TagInfo: '当前文件和目录的数量',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=FederationState:NumFiles,表示当前文件和目录的数量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.RBF.NN',
                Unit: '个',
                Desc: 'namenodes数量',
                Tags: [
                  {
                    TagName: 'NumExpiredNamenodes',
                    TagInfo: '过期的namenodes的数量',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=FederationState:NumExpiredNamenodes,表示过期的namenodes的数量',
                  },
                  {
                    TagName: 'NumNamenodes',
                    TagInfo: 'namenodes的数量',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=FederationState:NumNamenodes,表示namenodes的数量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.RBF.NS',
                Unit: '个',
                Desc: 'nameservices数量',
                Tags: [
                  {
                    TagName: 'NumNameservices',
                    TagInfo: 'nameservices的数量',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=FederationState:NumNameservices,表示当前nameservices的数量',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: 'RouterRPC',
            MetricMetas: [
              {
                Name: 'HDFS.DFSROUTER.RPC.FAILURE',
                Unit: 'count',
                Desc: '失败请求数',
                Tags: [
                  {
                    TagName: 'RouterFailureStateStore',
                    TagInfo: '由于状态存储不可用而导致的失败请求数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:RouterFailureStateStore,表示由于状态存储不可用而导致的失败请求数',
                  },
                  {
                    TagName: 'RouterFailureReadOnly',
                    TagInfo: '由于只读挂载点而导致的失败请求数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:RouterFailureReadOnly,表示由于只读挂载点而导致的失败请求数',
                  },
                  {
                    TagName: 'RouterFailureLocked',
                    TagInfo: '由于路径锁定而导致的失败请求数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:RouterFailureLocked,表示由于路径锁定而导致的失败请求数',
                  },
                  {
                    TagName: 'RouterFailureSafemode',
                    TagInfo: '由于安全模式而导致的失败请求数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:RouterFailureSafemode,表示由于安全模式而导致的失败请求数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.RPC.OP',
                Unit: 'count/s',
                Desc: 'Router操作数',
                Tags: [
                  {
                    TagName: 'ProcessingOp',
                    TagInfo: '每秒Router内部处理的操作数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:ProcessingOp变化量与时间的比值,表示每秒Router内部处理的操作数',
                  },
                  {
                    TagName: 'ProxyOp',
                    TagInfo: '每秒Router代理到Namenode的操作数量',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:ProxyOp变化量与时间的比值,表示每秒Router代理到Namenode的操作数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HDFS.DFSROUTER.RPC.TIME',
                Unit: 'ns',
                Desc: 'Router处理操作平均时间',
                Tags: [
                  {
                    TagName: 'ProcessingAvgTime',
                    TagInfo: 'Router处理操作的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:ProcessingAvgTime,表示Router处理操作的平均时间（纳秒）',
                  },
                  {
                    TagName: 'ProxyAvgTime',
                    TagInfo: 'Router代理操作到Namenodes的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=org.apache.hadoop.hdfs.server.federation.metrics.FederationRPCMetrics:ProxyAvgTime,表示Router代理操作到Namenodes的平均时间（纳秒)',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: 'StateStore',
            MetricMetas: [
              {
                Name: 'HDFS.DFSROUTER.STATESTORE.NUM.OP',
                Unit: 'count/s',
                Desc: 'StateStore事务操作',
                Tags: [
                  {
                    TagName: 'ReadsNumOps',
                    TagInfo: '每秒GET事务数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:ReadsNumOps变化量与时间的比值,表示每秒GET事务的数量',
                  },
                  {
                    TagName: 'WritesNumOps',
                    TagInfo: '每秒PUT事务数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:WritesNumOps变化量与时间的比值,表示每秒PUT事务的数量',
                  },
                  {
                    TagName: 'RemovesNumOps',
                    TagInfo: '每秒REMOVE事务数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:RemovesNumOps变化量与时间的比值,表示每秒REMOVE事务的数量',
                  },
                  {
                    TagName: 'FailuresNumOps',
                    TagInfo: '每秒失败事务数',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:FailuresNumOps变化量与时间的比值,表示每秒失败事务的数量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HDFS.DFSROUTER.STATESTORE.TIME',
                Unit: 'ms',
                Desc: ' StateStore事务操作平均时间',
                Tags: [
                  {
                    TagName: 'ReadsAvgTime',
                    TagInfo: 'State Store的GET事务平均时间',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:ReadsAvgTime,表示State Store的GET事务平均时间（以毫秒为单位)',
                  },
                  {
                    TagName: 'WritesAvgTime',
                    TagInfo: 'State Store进行PUT事务的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:WritesAvgTime,表示State Store进行PUT事务的平均时间（以毫秒为单位）',
                  },
                  {
                    TagName: 'RemovesAvgTime',
                    TagInfo: 'State Store进行REMOVE事务的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:RemovesAvgTime,表示State Store进行REMOVE事务的平均时间（以毫秒为单位)',
                  },
                  {
                    TagName: 'FailuresAvgTime',
                    TagInfo: 'State Store失败事务的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX Hadoop:service=Router,name=StateStoreActivity:FailuresAvgTime,表示State Store失败事务的平均时间（以毫秒为单位)',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HDFS.DFSROUTER.THREAD_COUNT',
                Unit: '个',
                Desc: '线程数量',
                Tags: [
                  {
                    TagName: 'PeckThreadCount',
                    TagInfo: '峰值线程数量',
                    StatisticalMethod:
                      '数据来源 JMX java.lang:type=Threading PeckThreadCount 变化量与时间的比值，表示峰值线程数量',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX java.lang:type=Threading DaemonThreadCount 变化量与时间的比值，表示后台线程数量',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'YARN',
    Namespace: [
      {
        Name: '概览',
        Groups: [
          {
            Title: 'ApplicationMaster',
            MetricMetas: [
              {
                Name: 'YARN.RM.AMLaunchDelayAvgTime',
                Unit: 'ms',
                Desc: 'RM启动AM的平均时间',
                Tags: [
                  {
                    TagName: 'AMLaunchDelayAvgTime',
                    TagInfo: 'RM启动AM containers花费的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics: AMLaunchDelayAvgTime',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.AMLaunchDelayNumOps',
                Unit: '个',
                Desc: 'AM启动数量',
                Tags: [
                  {
                    TagName: 'AMLaunchDelayNumOps',
                    TagInfo: '启动的AM的总数',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics: AMLaunchDelayNumOps',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.AMRegisterDelayAvgTime',
                Unit: 'ms',
                Desc: 'AM注册到RM的平均时间',
                Tags: [
                  {
                    TagName: 'AMRegisterDelayAvgTime',
                    TagInfo: 'AM花费注册到RM的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics: AMRegisterDelayAvgTime',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.AMRegisterDelayNumOps',
                Unit: '个',
                Desc: '注册的AM总数',
                Tags: [
                  {
                    TagName: 'AMRegisterDelayNumOps',
                    TagInfo: '注册的AM的总数',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics: AMRegisterDelayNumOps',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '节点',
            MetricMetas: [
              {
                Name: 'YARN.RM.NUMS',
                Unit: '个',
                Desc: '节点个数',
                Tags: [
                  {
                    TagName: 'NumActiveNMs',
                    TagInfo: '当前存活的NodeManager个数',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics:NumActiveNMs，表示当前存活的NodeManager个数',
                  },
                  {
                    TagName: 'NumDecommissionedNMs',
                    TagInfo: '当前Decommissioned的NodeManager个数',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics:NumDecommissionedNMs，表示当前Decommissioned的NodeManager个数',
                  },
                  {
                    TagName: 'NumLostNMs',
                    TagInfo: '当前Lost的NodeManager个数',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics:NumLostNMs，表示当前Lost的NodeManager个数',
                  },
                  {
                    TagName: 'NumUnhealthyNMs',
                    TagInfo: '当前Unhealthy的NodeManager个数',
                    StatisticalMethod:
                      '数据来源 JMX ClusterMetrics:NumUnhealthyNMs，表示当前Unhealthy的NodeManager个数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '队列CPU',
            MetricMetas: [
              {
                Name: 'YARN.RM.QUEUE.VCORES-root',
                Unit: '核',
                Desc: 'CPU核数-root',
                Tags: [
                  {
                    TagName: 'AllocatedVCores',
                    TagInfo: '当前队列分配的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedVCores，表示当前队列分配的 VCore 个数',
                  },
                  {
                    TagName: 'ReservedVCores',
                    TagInfo: '当前队列中 reserved 的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ReservedVCores，表示当前队列中 reserved 的 VCore 个数',
                  },
                  {
                    TagName: 'AvailableVCores',
                    TagInfo: '当前队列可用的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AvailableVCores，表示当前队列可用的 VCore 个数',
                  },
                  {
                    TagName: 'PendingVCores',
                    TagInfo: '当前队列的资源请求中 pending 的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:PendingVCores，表示当前队列的资源请求中 pending 的 VCore 个数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.VCORES-root.default',
                Unit: '核',
                Desc: 'CPU核数-root.default',
                Tags: [
                  {
                    TagName: 'AllocatedVCores',
                    TagInfo: '当前队列分配的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedVCores，表示当前队列分配的 VCore 个数',
                  },
                  {
                    TagName: 'ReservedVCores',
                    TagInfo: '当前队列中 reserved 的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ReservedVCores，表示当前队列中 reserved 的 VCore 个数',
                  },
                  {
                    TagName: 'AvailableVCores',
                    TagInfo: '当前队列可用的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AvailableVCores，表示当前队列可用的 VCore 个数',
                  },
                  {
                    TagName: 'PendingVCores',
                    TagInfo: '当前队列的资源请求中 pending 的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:PendingVCores，表示当前队列的资源请求中 pending 的 VCore 个数',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '队列CPU使用率',
            MetricMetas: [
              {
                Name: 'YARN.RM.QUEUE.VCORES.RATIO-root',
                Unit: '%',
                Desc: 'CPU使用率大小-root',
                Tags: [
                  {
                    TagName: 'usageRatio',
                    TagInfo: '当前队列分配CPU使用率',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedVCores,AvailableVCores,计算方式:AllocatedVCores/(AvailableVCores+AllocatedVCores),表示当前队列CPU使用率',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.VCORES.RATIO-root.default',
                Unit: '%',
                Desc: 'CPU使用率大小-root.default',
                Tags: [
                  {
                    TagName: 'usageRatio',
                    TagInfo: '当前队列分配CPU使用率',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedVCores,AvailableVCores,计算方式:AllocatedVCores/(AvailableVCores+AllocatedVCores),表示当前队列CPU使用率',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '队列任务',
            MetricMetas: [
              {
                Name: 'YARN.RM.QUEUE.APPS-root',
                Unit: '个',
                Desc: '应用总数-root',
                Tags: [
                  {
                    TagName: 'AppsSubmitted',
                    TagInfo: '当前队列历史提交作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsSubmitted，表示当前队列历史提交作业个数',
                  },
                  {
                    TagName: 'AppsInstantValSubmitted',
                    TagInfo: '当前队列历史提交作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsSubmitted，计算方式采集频率vaule-lastValue,表示当前队列历史提交作业个数瞬时值',
                  },
                  {
                    TagName: 'AppsRunning',
                    TagInfo: '当前队列正在运行的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsRunning，表示当前队列正在运行的作业个数',
                  },
                  {
                    TagName: 'AppsPending',
                    TagInfo: '当前队列 pending 的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsPending，表示当前队列 pending 的作业个数',
                  },
                  {
                    TagName: 'AppsCompleted',
                    TagInfo: '当前队列完成的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsCompleted，表示当前队列完成的作业个数',
                  },
                  {
                    TagName: 'AppsInstantValCompleted',
                    TagInfo: '当前队列完成的作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsInstantValCompleted，计算方式采集频率vaule-lastValue,表示当前队列完成的作业个数瞬时值',
                  },
                  {
                    TagName: 'AppsKilled',
                    TagInfo: '当前队列 kill 掉的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsKilled，表示当前队列 kill 掉的作业个数',
                  },
                  {
                    TagName: 'AppsInstantValKilled',
                    TagInfo: '当前队列 kill 掉的作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsKilled,计算方式采集频率vaule-lastValue,表示当前队列 kill 掉的作业个数瞬时值',
                  },
                  {
                    TagName: 'AppsFailed',
                    TagInfo: '当前队列失败的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsFailed，表示当前队列失败的作业个数',
                  },
                  {
                    TagName: 'AppsInstantValFailed',
                    TagInfo: '当前队列失败的作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsFailed,计算方式采集频率vaule-lastValue表示当前队列失败的作业个数瞬时值',
                  },
                  {
                    TagName: 'ActiveApplications',
                    TagInfo: '当前队列中 active 的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ActiveApplications，表示当前队列中 active 的作业个数',
                  },
                  {
                    TagName: 'running_0',
                    TagInfo: '当前队列中运行作业运行时间小于 60 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_0，表示当前队列中运行作业运行时间小于 60 分钟的作业个数',
                  },
                  {
                    TagName: 'running_60',
                    TagInfo:
                      '当前队列中运行作业运行时间介于 60~300 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_60，表示当前队列中运行作业运行时间介于 60~300 分钟的作业个数',
                  },
                  {
                    TagName: 'running_300',
                    TagInfo:
                      '当前队列中运行作业运行时间介于 300~1440 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_300，表示当前队列中运行作业运行时间介于 300~1440 分钟的作业个数',
                  },
                  {
                    TagName: 'running_1440',
                    TagInfo:
                      '当前队列中运行作业运行时间大于 1440 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_1440，表示当前队列中运行作业运行时间大于 1440 分钟的作业个数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.APPS-root.default',
                Unit: '个',
                Desc: '应用总数-root.default',
                Tags: [
                  {
                    TagName: 'AppsSubmitted',
                    TagInfo: '当前队列历史提交作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsSubmitted，表示当前队列历史提交作业个数',
                  },
                  {
                    TagName: 'AppsInstantValSubmitted',
                    TagInfo: '当前队列历史提交作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsSubmitted，计算方式采集频率vaule-lastValue,表示当前队列历史提交作业个数瞬时值',
                  },
                  {
                    TagName: 'AppsRunning',
                    TagInfo: '当前队列正在运行的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsRunning，表示当前队列正在运行的作业个数',
                  },
                  {
                    TagName: 'AppsPending',
                    TagInfo: '当前队列 pending 的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsPending，表示当前队列 pending 的作业个数',
                  },
                  {
                    TagName: 'AppsCompleted',
                    TagInfo: '当前队列完成的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsCompleted，表示当前队列完成的作业个数',
                  },
                  {
                    TagName: 'AppsInstantValCompleted',
                    TagInfo: '当前队列完成的作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsInstantValCompleted，计算方式采集频率vaule-lastValue,表示当前队列完成的作业个数瞬时值',
                  },
                  {
                    TagName: 'AppsKilled',
                    TagInfo: '当前队列 kill 掉的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsKilled，表示当前队列 kill 掉的作业个数',
                  },
                  {
                    TagName: 'AppsInstantValKilled',
                    TagInfo: '当前队列 kill 掉的作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsKilled,计算方式采集频率vaule-lastValue,表示当前队列 kill 掉的作业个数瞬时值',
                  },
                  {
                    TagName: 'AppsFailed',
                    TagInfo: '当前队列失败的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsFailed，表示当前队列失败的作业个数',
                  },
                  {
                    TagName: 'AppsInstantValFailed',
                    TagInfo: '当前队列失败的作业个数瞬时值',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AppsFailed,计算方式采集频率vaule-lastValue表示当前队列失败的作业个数瞬时值',
                  },
                  {
                    TagName: 'ActiveApplications',
                    TagInfo: '当前队列中 active 的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ActiveApplications，表示当前队列中 active 的作业个数',
                  },
                  {
                    TagName: 'running_0',
                    TagInfo: '当前队列中运行作业运行时间小于 60 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_0，表示当前队列中运行作业运行时间小于 60 分钟的作业个数',
                  },
                  {
                    TagName: 'running_60',
                    TagInfo:
                      '当前队列中运行作业运行时间介于 60~300 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_60，表示当前队列中运行作业运行时间介于 60~300 分钟的作业个数',
                  },
                  {
                    TagName: 'running_300',
                    TagInfo:
                      '当前队列中运行作业运行时间介于 300~1440 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_300，表示当前队列中运行作业运行时间介于 300~1440 分钟的作业个数',
                  },
                  {
                    TagName: 'running_1440',
                    TagInfo:
                      '当前队列中运行作业运行时间大于 1440 分钟的作业个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:running_1440，表示当前队列中运行作业运行时间大于 1440 分钟的作业个数',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '队列内存',
            MetricMetas: [
              {
                Name: 'YARN.RM.QUEUE.MEM-root',
                Unit: 'MB',
                Desc: '内存大小-root',
                Tags: [
                  {
                    TagName: 'AllocatedMB',
                    TagInfo: '当前队列分配的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedMB，表示当前队列分配的内存大小',
                  },
                  {
                    TagName: 'AvailableMB',
                    TagInfo: '当前队列可用的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AvailableMB，表示当前队列可用的内存大小',
                  },
                  {
                    TagName: 'PendingMB',
                    TagInfo: '当前队列的资源请求中 pending 的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:PendingMB，表示当前队列的资源请求中 pending 的内存大小',
                  },
                  {
                    TagName: 'ReservedMB',
                    TagInfo: '当前队列中 reserved 内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ReservedMB，表示当前队列中 reserved 内存大小',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.MEM-root.default',
                Unit: 'MB',
                Desc: '内存大小-root.default',
                Tags: [
                  {
                    TagName: 'AllocatedMB',
                    TagInfo: '当前队列分配的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedMB，表示当前队列分配的内存大小',
                  },
                  {
                    TagName: 'AvailableMB',
                    TagInfo: '当前队列可用的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AvailableMB，表示当前队列可用的内存大小',
                  },
                  {
                    TagName: 'PendingMB',
                    TagInfo: '当前队列的资源请求中 pending 的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:PendingMB，表示当前队列的资源请求中 pending 的内存大小',
                  },
                  {
                    TagName: 'ReservedMB',
                    TagInfo: '当前队列中 reserved 内存大小',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ReservedMB，表示当前队列中 reserved 内存大小',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '队列内存使用率',
            MetricMetas: [
              {
                Name: 'YARN.RM.QUEUE.MEM.RATIO-root',
                Unit: '%',
                Desc: '内存使用率大小-root',
                Tags: [
                  {
                    TagName: 'usageRatio',
                    TagInfo: '当前队列分配内存使用率',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedMB,AvailableMB,计算方式:AllocatedMB/(AllocatedMB+AvailableMB),表示当前队列内存使用率',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.MEM.RATIO-root.default',
                Unit: '%',
                Desc: '内存使用率大小-root.default',
                Tags: [
                  {
                    TagName: 'usageRatio',
                    TagInfo: '当前队列分配内存使用率',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedMB,AvailableMB,计算方式:AllocatedMB/(AllocatedMB+AvailableMB),表示当前队列内存使用率',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '队列容器',
            MetricMetas: [
              {
                Name: 'YARN.RM.QUEUE.CONTAINER-root',
                Unit: '个',
                Desc: '容器个数-root',
                Tags: [
                  {
                    TagName: 'AllocatedContainers',
                    TagInfo: '当前队列分配的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedContainers，表示当前队列分配的 container 个数',
                  },
                  {
                    TagName: 'PendingContainers',
                    TagInfo: '当前队列的资源请求中 pending 的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:PendingContainers，表示当前队列的资源请求中 pending 的 container 个数',
                  },
                  {
                    TagName: 'ReservedContainers',
                    TagInfo: '当前队列中 reserved 的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ReservedContainers，表示当前队列中 reserved 的 container 个数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.CONTAINER.AGGREGATE-root',
                Unit: '个',
                Desc: '容器分配释放总数-root',
                Tags: [
                  {
                    TagName: 'AggregateContainersAllocated',
                    TagInfo: '当前队列分配的 container 总数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AggregateContainersAllocated，表示当前队列分配的 container 总数',
                  },
                  {
                    TagName: 'AggregateContainersReleased',
                    TagInfo: '当前队列 release 的 container 总数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AggregateContainersReleased，表示当前队列 release 的 container 总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.CONTAINER-root.default',
                Unit: '个',
                Desc: '容器个数-root.default',
                Tags: [
                  {
                    TagName: 'AllocatedContainers',
                    TagInfo: '当前队列分配的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AllocatedContainers，表示当前队列分配的 container 个数',
                  },
                  {
                    TagName: 'PendingContainers',
                    TagInfo: '当前队列的资源请求中 pending 的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:PendingContainers，表示当前队列的资源请求中 pending 的 container 个数',
                  },
                  {
                    TagName: 'ReservedContainers',
                    TagInfo: '当前队列中 reserved 的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ReservedContainers，表示当前队列中 reserved 的 container 个数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.CONTAINER.AGGREGATE-root.default',
                Unit: '个',
                Desc: '容器分配释放总数-root.default',
                Tags: [
                  {
                    TagName: 'AggregateContainersAllocated',
                    TagInfo: '当前队列分配的 container 总数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AggregateContainersAllocated，表示当前队列分配的 container 总数',
                  },
                  {
                    TagName: 'AggregateContainersReleased',
                    TagInfo: '当前队列 release 的 container 总数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:AggregateContainersReleased，表示当前队列 release 的 container 总数',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '队列用户',
            MetricMetas: [
              {
                Name: 'YARN.RM.QUEUE.USER-root',
                Unit: '个',
                Desc: '用户数-root',
                Tags: [
                  {
                    TagName: 'ActiveUsers',
                    TagInfo: '当前队列活跃用户数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ActiveUsers，表示当前队列活跃用户数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.RM.QUEUE.USER-root.default',
                Unit: '个',
                Desc: '用户数-root.default',
                Tags: [
                  {
                    TagName: 'ActiveUsers',
                    TagInfo: '当前队列活跃用户数',
                    StatisticalMethod:
                      '数据来源 JMX QueueMetrics:ActiveUsers，表示当前队列活跃用户数',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '集群资源',
            MetricMetas: [
              {
                Name: 'YARN.CLUSTER.RES.APP',
                Unit: '个',
                Desc: 'Applications',
                Tags: [
                  {
                    TagName: 'completed',
                    TagInfo: '集群中运行完成的作业数',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:appsCompleted',
                  },
                  {
                    TagName: 'failed',
                    TagInfo: '集群中运行失败的作业数',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:appsFailed',
                  },
                  {
                    TagName: 'killed',
                    TagInfo: '集群中被杀掉的作业数',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:appsKilled',
                  },
                  {
                    TagName: 'pending',
                    TagInfo: '集群中等待运行的作业数',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:appsPending',
                  },
                  {
                    TagName: 'running',
                    TagInfo: '集群中运行中的作业数',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:appsRunning',
                  },
                  {
                    TagName: 'submitted',
                    TagInfo: '集群中已提交的作业数',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:appsSubmitted',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.CLUSTER.RES.CONTAINER',
                Unit: '个',
                Desc: 'Containers',
                Tags: [
                  {
                    TagName: 'containersAllocated',
                    TagInfo: '集群中已分配的Container数目',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:containersAllocated，表示当前集群已分配的Container容器数目',
                  },
                  {
                    TagName: 'containersPending',
                    TagInfo: '集群中请求中的Container数目',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:containersPending，表示当前集群待分配的Container容器数目',
                  },
                  {
                    TagName: 'containersReserved',
                    TagInfo: '集群中保留的Container数目',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:containersReserved，表示当前集群保留的Container容器数目',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.CLUSTER.RES.CPU',
                Unit: '个',
                Desc: 'Cores',
                Tags: [
                  {
                    TagName: 'allocatedVirtualCores',
                    TagInfo: '集群中已分配的CPU资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:allocatedVirtualCores，表示当前集群已使用的CPU VCores数目',
                  },
                  {
                    TagName: 'availableVirtualCores',
                    TagInfo: '集群中可使用的CPU资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:availableVirtualCores，表示当前集群可使用的CPU VCores数目',
                  },
                  {
                    TagName: 'reservedVirtualCores',
                    TagInfo: '集群中保留的CPU资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:reservedVirtualCores，表示当前集群保留的CPU VCores数目',
                  },
                  {
                    TagName: 'totalVirtualCores',
                    TagInfo: '集群中全部的CPU资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:totalVirtualCores，表示当前集群总的CPU VCores数目',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.CLUSTER.RES.CPU_USAGE_RATIO',
                Unit: '%',
                Desc: 'CPU使用率',
                Tags: [
                  {
                    TagName: 'usageRatio',
                    TagInfo: '集群当前CPU资源的使用率',
                    StatisticalMethod:
                      '数据来源 指标 allocatedVirtualCores 除以 指标totalVirtualCores，表示当前集群CPU VCores数目的使用百分比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.CLUSTER.RES.MEM',
                Unit: 'MB',
                Desc: 'Memory',
                Tags: [
                  {
                    TagName: 'allocatedMB',
                    TagInfo: '集群中已分配的内存资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:allocatedMB，表示当前集群已经分配的内存资源',
                  },
                  {
                    TagName: 'availableMB',
                    TagInfo: '集群中可使用的内存资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:availableMB，表示当前集群可分配的内存资源',
                  },
                  {
                    TagName: 'reservedMB',
                    TagInfo: '集群中保留的内存资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:reservedMB，表示当前集群保留使用的内存资源',
                  },
                  {
                    TagName: 'totalMB',
                    TagInfo: '集群中全部的内存资源',
                    StatisticalMethod:
                      '数据来源 JMX cluster/metrics:totalMB，表示当前集群总内存资源',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.CLUSTER.RES.MEM_USAGE_RATIO',
                Unit: '%',
                Desc: '内存使用率',
                Tags: [
                  {
                    TagName: 'usageRatio',
                    TagInfo: '集群当前内存资源的使用率',
                    StatisticalMethod:
                      '数据来源 指标 allocatedMB 除以 指标totalMB，表示当前集群内存资源的使用百分比',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'NodeManager',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'YARN.NM.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.JVM.JAVA_THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '当前NEW状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '当前RUNNABLE状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '当前BLOCKED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '当前WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '当前TIMED_WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '当前TERMINATED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.JVM.LOG_TOTAL',
                Unit: '次',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal 变化量，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError 变化量，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn 变化量，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo 变化量，表示INFO日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: '进程使用的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示进程使用的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: '进程 commit 的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示进程 commit 的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: '进程最大的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapMaxM，表示进程可使用的非堆内存最大值，没有则表示无最大限制',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: '进程使用的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示进程使用的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: '进程 commit 的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示进程 commit 的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: '进程最大的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示进程最大的堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: '进程最大内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示进程最大内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '容器',
            MetricMetas: [
              {
                Name: 'YARN.NM.CONTAINER',
                Unit: '个',
                Desc: '容器总数',
                Tags: [
                  {
                    TagName: 'ContainersLaunched',
                    TagInfo: 'launch 的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainersLaunched，表示launch的 container 个数',
                  },
                  {
                    TagName: 'ContainersCompleted',
                    TagInfo: '运行完成的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainersCompleted，表示运行完成的 container 个数',
                  },
                  {
                    TagName: 'ContainersFailed',
                    TagInfo: '失败的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainersFailed，表示失败的 container 个数',
                  },
                  {
                    TagName: 'ContainersKilled',
                    TagInfo: '被 kill 的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainersKilled，表示被kill的 container 个数',
                  },
                  {
                    TagName: 'ContainersIniting',
                    TagInfo: '初始化中的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainersIniting，表示初始化中的 container 个数',
                  },
                  {
                    TagName: 'ContainersRunning',
                    TagInfo: '正在运行的 container 个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainersRunning，表示正在运行的 container 个数',
                  },
                  {
                    TagName: 'AllocatedContainers',
                    TagInfo: 'NodeManager 分配的 container 数量',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:AllocatedContainers，表示已分配的 container 个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.CONTAINER.LAUNCH.AVGTIME',
                Unit: 'ms',
                Desc: '容器启动平均耗时',
                Tags: [
                  {
                    TagName: 'ContainerLaunchDurationAvgTime',
                    TagInfo: '容器启动平均耗时',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainerLaunchDurationAvgTime，表示容器启动平均耗时',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.CONTAINER.LAUNCH.OPS',
                Unit: '个',
                Desc: '容器启动操作数',
                Tags: [
                  {
                    TagName: 'ContainerLaunchDurationNumOps',
                    TagInfo: '容器启动操作数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:ContainerLaunchDurationNumOps，表示容器启动次数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'YARN.NM.MEM',
                Unit: 'GB',
                Desc: '内存大小',
                Tags: [
                  {
                    TagName: 'AllocatedGB',
                    TagInfo: 'NodeManager 分配的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:AllocatedGB，表示NodeManager 分配的内存大小',
                  },
                  {
                    TagName: 'AvailableGB',
                    TagInfo: 'NodeManager 可用的内存大小',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:AvailableGB，表示NodeManager 可用的内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuLoad，表示CPU 利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: 'CPU 累计使用时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时长',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时长',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.THREAD.COUNT',
                Unit: '个',
                Desc: '工作线程数',
                Tags: [
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '进程的 Daemon 线程个数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:DaemonThreadCount，表示进程当前的 Daemon 线程个数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '进程的线程个数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ThreadCount，表示进程当前的线程个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.NM.VCORES',
                Unit: '核',
                Desc: 'CPU核数',
                Tags: [
                  {
                    TagName: 'AvailableVCores',
                    TagInfo: 'NodeManager 可用的 VCore 个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:AvailableVCores，表示NodeManager 可用的 VCore 个数',
                  },
                  {
                    TagName: 'AllocatedVCores',
                    TagInfo: 'NodeManager 分配的 VCore个数',
                    StatisticalMethod:
                      '数据来源 JMX NodeManagerMetrics:AllocatedVCores，表示NodeManager 分配的 VCore个数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'ResourceManager',
        Groups: [
          {
            Title: '5000端口',
            MetricMetas: [
              {
                Name: 'YARN.RM.RPC.AUTH.5000',
                Unit: '个',
                Desc: 'RPC认证授权数',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC authentication 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC authentication 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC authorization 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC authorization 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.BYTES.5000',
                Unit: 'bytes/s',
                Desc: 'RPC接收发送数据量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: 'RPC 接收数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:ReceivedBytes，计算累计值每秒增量，表示RPC 接收数据量',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: 'RPC 发送数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:SentBytes，计算累计值每秒增量，表示RPC 发送数据量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.CONNECTIONS.5000',
                Unit: '个',
                Desc: 'RPC连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前打开的连接个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:NumOpenConnections，表示当前端口连接个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.OPS.5000',
                Unit: '次/s',
                Desc: 'RPC请求次数',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.QUEUE.LEN.5000',
                Unit: '个',
                Desc: 'RPC队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前RPC 队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:CallQueueLength，表示当前RPC 队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.TIME.5000',
                Unit: 'ms',
                Desc: 'RPC平均处理时间',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeAvgTime',
                    TagInfo: 'RPC 请求平均处理时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeAvgTime，表示RPC 请求平均处理时间',
                  },
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 在Queue中平均时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeAvgTime',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '5001端口',
            MetricMetas: [
              {
                Name: 'YARN.RM.RPC.AUTH.5001',
                Unit: '个',
                Desc: 'RPC认证授权数',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC authentication 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC authentication 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC authorization 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC authorization 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.BYTES.5001',
                Unit: 'bytes/s',
                Desc: 'RPC接收发送数据量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: 'RPC 接收数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:ReceivedBytes，计算累计值每秒增量，表示RPC 接收数据量',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: 'RPC 发送数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:SentBytes，计算累计值每秒增量，表示RPC 发送数据量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.CONNECTIONS.5001',
                Unit: '个',
                Desc: 'RPC连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前打开的连接个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:NumOpenConnections，表示当前端口连接个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.OPS.5001',
                Unit: '次/s',
                Desc: 'RPC请求次数',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.QUEUE.LEN.5001',
                Unit: '个',
                Desc: 'RPC队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前RPC 队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:CallQueueLength，表示当前RPC 队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.TIME.5001',
                Unit: 'ms',
                Desc: 'RPC平均处理时间',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeAvgTime',
                    TagInfo: 'RPC 请求平均处理时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeAvgTime，表示RPC 请求平均处理时间',
                  },
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 在Queue中平均时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeAvgTime',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '5002端口',
            MetricMetas: [
              {
                Name: 'YARN.RM.RPC.AUTH.5002',
                Unit: '个',
                Desc: 'RPC认证授权数',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC authentication 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC authentication 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC authorization 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC authorization 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.BYTES.5002',
                Unit: 'bytes/s',
                Desc: 'RPC接收发送数据量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: 'RPC 接收数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:ReceivedBytes，计算累计值每秒增量，表示RPC 接收数据量',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: 'RPC 发送数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:SentBytes，计算累计值每秒增量，表示RPC 发送数据量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.CONNECTIONS.5002',
                Unit: '个',
                Desc: 'RPC连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前打开的连接个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:NumOpenConnections，表示当前端口连接个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.OPS.5002',
                Unit: '次/s',
                Desc: 'RPC请求次数',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.QUEUE.LEN.5002',
                Unit: '个',
                Desc: 'RPC队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前RPC 队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:CallQueueLength，表示当前RPC 队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.TIME.5002',
                Unit: 'ms',
                Desc: 'RPC平均处理时间',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeAvgTime',
                    TagInfo: 'RPC 请求平均处理时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeAvgTime，表示RPC 请求平均处理时间',
                  },
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 在Queue中平均时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeAvgTime',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '5003端口',
            MetricMetas: [
              {
                Name: 'YARN.RM.RPC.AUTH.5003',
                Unit: '个',
                Desc: 'RPC认证授权数',
                Tags: [
                  {
                    TagName: 'RpcAuthenticationFailures',
                    TagInfo: 'RPC authentication 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthenticationSuccesses',
                    TagInfo: 'RPC authentication 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthenticationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                  {
                    TagName: 'RpcAuthorizationFailures',
                    TagInfo: 'RPC authorization 失败个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationFailures，计算统计周期内的增量，表示当前端口RPC失败个数',
                  },
                  {
                    TagName: 'RpcAuthorizationSuccesses',
                    TagInfo: 'RPC authorization 成功个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcAuthorizationSuccesses，计算统计周期内的增量，表示当前端口RPC成功个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.BYTES.5003',
                Unit: 'bytes/s',
                Desc: 'RPC接收发送数据量',
                Tags: [
                  {
                    TagName: 'ReceivedBytes',
                    TagInfo: 'RPC 接收数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:ReceivedBytes，计算累计值每秒增量，表示RPC 接收数据量',
                  },
                  {
                    TagName: 'SentBytes',
                    TagInfo: 'RPC 发送数据量',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:SentBytes，计算累计值每秒增量，表示RPC 发送数据量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.CONNECTIONS.5003',
                Unit: '个',
                Desc: 'RPC连接数',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '当前打开的连接个数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:NumOpenConnections，表示当前端口连接个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.OPS.5003',
                Unit: '次/s',
                Desc: 'RPC请求次数',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                  {
                    TagName: 'RpcQueueTimeNumOps',
                    TagInfo: 'RPC 请求次数',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeNumOps，计算累计值增量，表示RPC 请求次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.QUEUE.LEN.5003',
                Unit: '个',
                Desc: 'RPC队列长度',
                Tags: [
                  {
                    TagName: 'CallQueueLength',
                    TagInfo: '当前RPC 队列长度',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:CallQueueLength，表示当前RPC 队列长度',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RPC.TIME.5003',
                Unit: 'ms',
                Desc: 'RPC平均处理时间',
                Tags: [
                  {
                    TagName: 'RpcProcessingTimeAvgTime',
                    TagInfo: 'RPC 请求平均处理时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcProcessingTimeAvgTime，表示RPC 请求平均处理时间',
                  },
                  {
                    TagName: 'RpcQueueTimeAvgTime',
                    TagInfo: 'RPC 在Queue中平均时间',
                    StatisticalMethod:
                      '数据来源 JMX RpcActivityForPort:RpcQueueTimeAvgTime',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'YARN.RM.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.JVM.JAVA_THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '处于 NEW 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '处于 RUNNABLE 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '处于 BLOCKED 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '处于 WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '处于 TIMED WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '处于 Terminated 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.JVM.LOG_TOTAL',
                Unit: '次',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo，表示INFO日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: '进程使用的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示进程使用的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: '进程 commit 的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示进程 commit 的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: '进程最大的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapMaxM，表示进程可使用的非堆内存最大值，没有则表示无最大限制',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: '进程使用的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示进程使用的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: '进程 commit 的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示进程 commit 的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: '进程最大的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示进程最大的堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: '进程最大内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示进程最大内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '状态',
            MetricMetas: [
              {
                Name: 'YARN.RM.STATE',
                Unit: '1:Active,0:Standby',
                Desc: '节点状态',
                Tags: [
                  {
                    TagName: 'haState',
                    TagInfo: 'ResourceManager主备状态',
                    StatisticalMethod:
                      '数据来源 通过请求http://RMip:port/ws/v1/cluster/info获取hastate，表示ResourceManager主备状态',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.STATE.SWITCH',
                Unit: '',
                Desc: '主备切换',
                Tags: [
                  {
                    TagName: 'switchOccurred',
                    TagInfo: 'ResourceManager主备切换',
                    StatisticalMethod:
                      '数据来源 通过请求http://RMip:port/ws/v1/cluster/info获取hastate，比较hastate较上个值是否改变，表示ResourceManager是否主备切换',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'YARN.RM.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuLoad，表示CPU 利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: 'CPU 累计使用时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时长',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时长',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.RM.THREAD.COUNT',
                Unit: '个',
                Desc: '工作线程数',
                Tags: [
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '进程的 Daemon 线程个数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:DaemonThreadCount，表示进程当前的 Daemon 线程个数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '进程的线程个数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ThreadCount，表示进程当前的线程个数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'JobHistoryServer',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'YARN.JH.JVM.JAVA_THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '当前NEW状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '当前RUNNABLE状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '当前BLOCKED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '当前WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '当前TIMED_WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '当前TERMINATED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.JH.JVM.LOG_TOTAL',
                Unit: '次',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo，表示INFO日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.JH.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: '进程使用的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示进程使用的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: '进程 commit 的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示进程 commit 的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: '进程最大的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapMaxM，表示进程可使用的非堆内存最大值，没有则表示无最大限制',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: '进程使用的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示进程使用的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: '进程 commit 的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示进程 commit 的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: '进程最大的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示进程最大的堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: '进程最大内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示进程最大内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.JH.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.JHS.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.JHS.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'YARN.JHS.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'YARN.JH.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuLoad，表示CPU 利用率',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.JH.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: 'CPU 累计使用时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.JH.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.JH.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时长',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时长',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'YARN.JH.THREAD.COUNT',
                Unit: '个',
                Desc: '工作线程数',
                Tags: [
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '进程的 Daemon 线程个数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:DaemonThreadCount，表示进程当前的 Daemon 线程个数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '进程的线程个数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ThreadCount，表示进程当前的线程个数',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'HBASE',
    Namespace: [
      {
        Name: '概览',
        Groups: [
          {
            Title: 'RegionServer',
            MetricMetas: [
              {
                Name: 'HBASE.MASTER.ASSIGNMENTMANAGER.RIT',
                Unit: '个',
                Desc: '集群处于RIT Region个数',
                Tags: [
                  {
                    TagName: 'ritCount',
                    TagInfo: 'Region in transition 的个数',
                    StatisticalMethod:
                      '数据来源 JMX AssignmentManger:ritCount，表示Region in transition 的个数',
                  },
                  {
                    TagName: 'ritCountOverThreshold',
                    TagInfo: 'Region in transition 时间超过阈值的 Region 个数',
                    StatisticalMethod:
                      '数据来源 JMX AssignmentManger:ritCountOverThreshold，表示Region in transition 时间超过阈值的 Region 个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.ASSIGNMENTMANAGER.TIME',
                Unit: 'ms',
                Desc: '集群RIT时间',
                Tags: [
                  {
                    TagName: 'ritOldestAge',
                    TagInfo: 'Region in transition 的最老年龄',
                    StatisticalMethod:
                      '数据来源 JMX AssignmentManger:ritOldestAge，表示Region in transition 的最老年龄',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.AVGLOAD',
                Unit: '个',
                Desc: '每个RS平均REGION数',
                Tags: [
                  {
                    TagName: 'averageLoad',
                    TagInfo: '每个 ResgionServer 平均 Region 数',
                    StatisticalMethod:
                      '数据来源 JMX Master:averageLoad，表示每个 ResgionServer 平均 Region 数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.RSNUMS',
                Unit: '个',
                Desc: '集群RS数量',
                Tags: [
                  {
                    TagName: 'numRegionServers',
                    TagInfo: '当前存活的 RegionServer 个数',
                    StatisticalMethod:
                      '数据来源 JMX Master:numRegionServers，表示当前存活的 RegionServer 个数',
                  },
                  {
                    TagName: 'numDeadRegionServers',
                    TagInfo: '当前Dead的 RegionServer 个数',
                    StatisticalMethod:
                      '数据来源 JMX Master:numDeadRegionServers，表示当前Dead的 RegionServer 个数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '请求量',
            MetricMetas: [
              {
                Name: 'HBASE.MASTER.BYTES',
                Unit: 'bytes/s',
                Desc: 'HMaster读写数据量',
                Tags: [
                  {
                    TagName: 'receivedBytes',
                    TagInfo: 'HMaster接收数据量',
                    StatisticalMethod:
                      '数据来源 JMX Master:receivedBytes，表示HMaster接收数据量',
                  },
                  {
                    TagName: 'sentBytes',
                    TagInfo: 'HMaster发送数据量',
                    StatisticalMethod:
                      '数据来源 JMX Master:sentBytes，表示HMaster发送数据量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.REQ',
                Unit: '个/s',
                Desc: '集群接口总请求量',
                Tags: [
                  {
                    TagName: 'clusterRequests',
                    TagInfo: '集群总请求数量',
                    StatisticalMethod:
                      '数据来源 JMX Master:clusterRequests，表示集群总请求数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '集群操作',
            MetricMetas: [
              {
                Name: 'HBASE.MASTER.ASSIGNMENTMANAGER.OPS',
                Unit: '次',
                Desc: '集群Assignment管理器操作',
                Tags: [
                  {
                    TagName: 'Assign_num_ops',
                    TagInfo: 'Assign region次数',
                    StatisticalMethod:
                      '数据来源 JMX AssignmentManger:Assign_num_ops，表示assign region次数',
                  },
                  {
                    TagName: 'BulkAssign_num_ops',
                    TagInfo: 'Bulk assign region次数',
                    StatisticalMethod:
                      '数据来源 JMX AssignmentManger:BulkAssign_num_ops，表示bulk assign region次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.BALANCER.OPS',
                Unit: '次',
                Desc: '集群负载均衡次数',
                Tags: [
                  {
                    TagName: 'BalancerCluster_num_ops',
                    TagInfo: '集群负载均衡次数',
                    StatisticalMethod:
                      '数据来源 JMX AssignmentManger:BalancerCluster_num_ops，表示集群负载均衡次数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'RegionServer',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HBASE.HS.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.HS.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.HS.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.JVM.LOG_TOTAL',
                Unit: '次',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal，表示Fatal日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError，表示Error日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn，表示Warn日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo，表示Info日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: '进程使用的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: '进程 commit 的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: '进程最大的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapMaxM，表示进程可使用的非堆内存最大值，没有则表示无最大限制',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: '进程使用的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: '进程 commit 的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: '进程最大的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: '进程最大内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示进程最大内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.JVM.THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '当前NEW状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '当前RUNNABLE状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '当前BLOCKED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '当前WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '当前TIMED_WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '当前TERMINATED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'RPC',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.IPC.AUTHENTICATION',
                Unit: '次',
                Desc: 'RPC认证次数',
                Tags: [
                  {
                    TagName: 'authenticationFailures',
                    TagInfo: 'RPC 认证失败次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:authenticationFailures，计算统计周期内的差值',
                  },
                  {
                    TagName: 'authenticationSuccesses',
                    TagInfo: 'RPC 认证成功次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:authenticationSuccesses，计算统计周期内的差值',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.IPC.CONNECTIONS',
                Unit: '个',
                Desc: 'RPC连接数',
                Tags: [
                  {
                    TagName: 'numOpenConnections',
                    TagInfo: 'RPC 连接数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numOpenConnections，表示RPC 连接数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.IPC.EXCEPTION',
                Unit: '次',
                Desc: 'RPC异常次数',
                Tags: [
                  {
                    TagName: 'FailedSanityCheckException',
                    TagInfo: 'FailedSanityCheckException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:FailedSanityCheckException，计算累计值增量，表示FailedSanityCheckException 异常次数',
                  },
                  {
                    TagName: 'NotServingRegionException',
                    TagInfo: 'NotServingRegionException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:NotServingRegionException，计算累计值增量，表示NotServingRegionException 异常次数',
                  },
                  {
                    TagName: 'OutOfOrderScannerNextException',
                    TagInfo: 'OutOfOrderScannerNextException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:OutOfOrderScannerNextException，计算累计值增量，表示OutOfOrderScannerNextException 异常次数',
                  },
                  {
                    TagName: 'RegionMovedException',
                    TagInfo: 'RegionMovedException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:RegionMovedException，计算累计值增量，表示RegionMovedException 异常次数',
                  },
                  {
                    TagName: 'RegionTooBusyException',
                    TagInfo: 'RegionTooBusyException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:RegionTooBusyException，计算累计值增量，表示RegionTooBusyException 异常次数',
                  },
                  {
                    TagName: 'UnknownScannerException',
                    TagInfo: 'UnknownScannerException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:UnknownScannerException，计算累计值增量，表示UnknownScannerException 异常次数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.IPC.HANDLER',
                Unit: '个',
                Desc: 'RPC句柄数',
                Tags: [
                  {
                    TagName: 'numActiveHandler',
                    TagInfo: 'RPC 句柄数',
                    StatisticalMethod: '数据来源 JMX IPC:numActiveHandler',
                  },
                  {
                    TagName: 'numActiveWriteHandler',
                    TagInfo: 'RPC读句柄数',
                    StatisticalMethod: '数据来源 JMX IPC:numActiveWriteHandler',
                  },
                  {
                    TagName: 'numActiveReadHandler',
                    TagInfo: 'RPC写句柄数',
                    StatisticalMethod: '数据来源 JMX IPC:numActiveReadHandler',
                  },
                  {
                    TagName: 'numActiveScanHandler',
                    TagInfo: 'RPC扫描句柄数',
                    StatisticalMethod: '数据来源 JMX IPC:numActiveScanHandler',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.IPC.QUEUE',
                Unit: '个',
                Desc: 'RPC队列请求数',
                Tags: [
                  {
                    TagName: 'numCallsInPriorityQueue',
                    TagInfo: '优先队列 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInPriorityQueue，表示优先队列 RPC 请求数',
                  },
                  {
                    TagName: 'numCallsInReplicationQueue',
                    TagInfo: '复制队列 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInReplicationQueue，表示复制队列 RPC 请求数',
                  },
                  {
                    TagName: 'numCallsInGeneralQueue',
                    TagInfo: '通用队列 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInGeneralQueue，表示通用队列 RPC 请求数',
                  },
                  {
                    TagName: 'numCallsInWriteQueue',
                    TagInfo: '写调用队列调用 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInWriteQueue，表示写调用队列调用 RPC 请求数',
                  },
                  {
                    TagName: 'numCallsInReadQueue',
                    TagInfo: '读取调用队列中 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInReadQueue，表示读取调用队列中 RPC 请求数',
                  },
                  {
                    TagName: 'numCallsInScanQueue',
                    TagInfo: '扫描调用队列中 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInScanQueue，表示扫描调用队列中 RPC 请求数',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: 'Region',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.REGION.COUNT',
                Unit: '个',
                Desc: 'Region个数',
                Tags: [
                  {
                    TagName: 'regionCount',
                    TagInfo: 'Region 个数',
                    StatisticalMethod:
                      '数据来源 JMX Server:regionCount，表示Region 个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.FILES.LOCAL.PERCENT',
                Unit: '%',
                Desc: 'Region本地化',
                Tags: [
                  {
                    TagName: 'percentFilesLocal',
                    TagInfo: 'Region 的 HFile 位于本地 HDFS data node的比例',
                    StatisticalMethod: '数据来源 JMX Server:percentFilesLocal',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.HFILES.PERCENT',
                Unit: '%',
                Desc: 'Region副本本地化',
                Tags: [
                  {
                    TagName: 'percentFilesLocalSecondaryRegions',
                    TagInfo:
                      'Region 副本的 HFile 位于本地 HDFS data node的比例',
                    StatisticalMethod:
                      '数据来源 JMX Server:percentFilesLocalSecondaryRegions',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '存储',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.COMPACTEDCELLSCOUNT',
                Unit: '个/s',
                Desc: 'Compacted Count 速率',
                Tags: [
                  {
                    TagName: 'MinorCompactedCells',
                    TagInfo: 'Minor Compacted Cells Count速率',
                    StatisticalMethod:
                      '数据来源 JMX Server:compactedCellsCount，表示在minor compactions期间平均每秒compacted cells个数',
                  },
                  {
                    TagName: 'MajorCompactedCells',
                    TagInfo: 'Major Compacted Cells Count速率',
                    StatisticalMethod:
                      '数据来源 JMX Server:majorCompactedCellsCount，表示major compactions期间平均每秒compacted cells个数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.COMPACTEDCELLSSIZE',
                Unit: 'bytes/s',
                Desc: 'Compacted  Size 速率',
                Tags: [
                  {
                    TagName: 'MinorCompactedCells',
                    TagInfo: 'Minor Compacted Cells Size速率',
                    StatisticalMethod:
                      '数据来源 JMX Server:compactedCellsCountSize，表示在minor compactions期间平均每秒compacted Cells数据量',
                  },
                  {
                    TagName: 'MajorCompactedCells',
                    TagInfo: 'Major Compacted Cells Size速率',
                    StatisticalMethod:
                      '数据来源 JMX Server:majorCompactedCellsSize，表示major compactions期间平均每秒compacted cells数据量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.HLOGCOUNT',
                Unit: '个',
                Desc: 'WAL文件数量',
                Tags: [
                  {
                    TagName: 'hlogFileCount',
                    TagInfo: 'WAL 文件数量',
                    StatisticalMethod:
                      '数据来源 JMX Server:hlogFileCount，表示WAL 文件数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.HLOGSIZE',
                Unit: 'Byte',
                Desc: 'WAL文件大小',
                Tags: [
                  {
                    TagName: 'hlogFileSize',
                    TagInfo: 'WAL 文件大小',
                    StatisticalMethod:
                      '数据来源 JMX Server:hlogFileSize，表示WAL 文件大小',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.MEMSTRORE',
                Unit: 'MB',
                Desc: 'Memstore大小',
                Tags: [
                  {
                    TagName: 'memStoreSize',
                    TagInfo: 'Memstore 大小',
                    StatisticalMethod:
                      '数据来源 JMX Server:memStoreSize，表示Memstore 大小',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.STORE.COUNT',
                Unit: '个',
                Desc: 'Store个数',
                Tags: [
                  {
                    TagName: 'storeCount',
                    TagInfo: 'Store 个数',
                    StatisticalMethod:
                      '数据来源 JMX Server:storeCount，表示Store 个数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.STOREFILECOUNT',
                Unit: '个',
                Desc: 'Storefile个数',
                Tags: [
                  {
                    TagName: 'storeFileCount',
                    TagInfo: 'Storefile 个数',
                    StatisticalMethod:
                      '数据来源 JMX Server:storeFileCount，表示Storefile 个数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.STOREFILESIZE',
                Unit: 'MB',
                Desc: 'Storefile大小',
                Tags: [
                  {
                    TagName: 'storeFileSize',
                    TagInfo: 'Storefile 大小',
                    StatisticalMethod:
                      '数据来源 JMX Server:storeFileSize，表示Storefile 大小',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '操作',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.SCANSIZE',
                Unit: 'bytes',
                Desc: 'SCAN SIZE',
                Tags: [
                  {
                    TagName: 'ScanSize_max',
                    TagInfo: '最大ScanSize',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanSize_max，ScanSize最大值.',
                  },
                  {
                    TagName: 'ScanSize_mean',
                    TagInfo: '平均ScanSize',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanSize_mean，ScanSize平均值.',
                  },
                  {
                    TagName: 'ScanSize_min',
                    TagInfo: '最小ScanSize',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanSize_min，ScanSize最小值',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SCANTIME',
                Unit: '秒',
                Desc: 'SCAN延迟',
                Tags: [
                  {
                    TagName: 'ScanTime_max',
                    TagInfo: 'Scan最长时间',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanTime_max，Scan最长时间.',
                  },
                  {
                    TagName: 'ScanTime_mean',
                    TagInfo: 'Scan平均时间',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanTime_mean，Scan平均时间.',
                  },
                  {
                    TagName: 'ScanTime_min',
                    TagInfo: 'Scan最小时间',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanTime_min，Scan最小时间.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.APPEND',
                Unit: 'ms',
                Desc: 'Append延迟',
                Tags: [
                  {
                    TagName: 'Appennd_99th_percentile',
                    TagInfo: 'Append延迟的99分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Append_99th_percentile,Appennd延迟',
                  },
                  {
                    TagName: 'Append_999th_percentile',
                    TagInfo: 'Append延迟的999分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Append_99.9th_percentile,Append延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.BULKLOAD',
                Unit: 'ms',
                Desc: 'Bulkload延迟',
                Tags: [
                  {
                    TagName: 'Bulkload_99th_percentile',
                    TagInfo: 'Bulkload延迟的99分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Bulkload_99th_percentile,Bulkload延迟',
                  },
                  {
                    TagName: 'Bulkload_999th_percentile',
                    TagInfo: 'Bulkload延迟的999分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Bulkload_99.9th_percentile,Bulkload延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.CELLS',
                Unit: 'bytes/s',
                Desc: '写磁盘速率',
                Tags: [
                  {
                    TagName: 'flushedCellsSize',
                    TagInfo: '写磁盘速率',
                    StatisticalMethod:
                      '数据来源 JMX Server:flushedCellsSize，计算累计值每秒增量，表示写磁盘速率',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.DELAY',
                Unit: 'ms',
                Desc: '平均延时',
                Tags: [
                  {
                    TagName: 'Append_mean',
                    TagInfo: 'Append 请求平均延时',
                    StatisticalMethod:
                      '数据来源 JMX Server:Append_mean，表示Append 请求平均延时',
                  },
                  {
                    TagName: 'Replay_mean',
                    TagInfo: 'Replay 请求平均延时',
                    StatisticalMethod:
                      '数据来源 JMX Server:Replay_mean，表示Replay 请求平均延时',
                  },
                  {
                    TagName: 'Get_mean',
                    TagInfo: 'Get 请求平均延时',
                    StatisticalMethod:
                      '数据来源 JMX Server:Get_mean，表示Get 请求平均延时',
                  },
                  {
                    TagName: 'updatesBlockedTime',
                    TagInfo: 'Memstore 可 flush 前的更新阻塞时间',
                    StatisticalMethod:
                      '数据来源 JMX Server:updatesBlockedTime，表示Memstore 可 flush 前的更新阻塞时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.DELETE',
                Unit: 'ms',
                Desc: 'Delete延迟',
                Tags: [
                  {
                    TagName: 'Delete_99th_percentile',
                    TagInfo: 'Delete延迟的99分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Delete_99th_percentile,Delete延迟',
                  },
                  {
                    TagName: 'Delete_999th_percentile',
                    TagInfo: 'Delete延迟的999分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Delete_99.9th_percentile,Delete延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.FLUSH',
                Unit: '次',
                Desc: 'RS写磁盘次数',
                Tags: [
                  {
                    TagName: 'FlushTime_num_ops',
                    TagInfo: 'Memstore flush 写磁盘次数',
                    StatisticalMethod:
                      '数据来源 JMX Server:FlushTime_num_ops，计算累计值增量，表示Memstore flush 写磁盘次数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.GET',
                Unit: 'ms',
                Desc: 'Get延迟',
                Tags: [
                  {
                    TagName: 'Get_99th_percentile',
                    TagInfo: 'Get延迟',
                    StatisticalMethod:
                      '数据来源 JMX Server:Get_99th_percentile,Get延迟',
                  },
                  {
                    TagName: 'Get_999th_percentile',
                    TagInfo: 'Get延迟',
                    StatisticalMethod:
                      '数据来源 JMX Server:Get_99.9th_percentile,Get延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.INCREMENT',
                Unit: 'ms',
                Desc: 'Increment延迟',
                Tags: [
                  {
                    TagName: 'Increment_99th_percentile',
                    TagInfo: 'Increment延迟的99分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Increment_99th_percentile,Increment延迟',
                  },
                  {
                    TagName: 'Increment_999th_percentile',
                    TagInfo: 'Increment延迟的999分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Increment_99.9th_percentile,Increment延迟',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.MULTIGET',
                Unit: 'ms',
                Desc: 'MultiGet延迟',
                Tags: [
                  {
                    TagName: 'MultiGet_99th_percentile',
                    TagInfo: 'MultiGet延迟的99分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:MultiGet_99th_percentile,MultiGet延迟',
                  },
                  {
                    TagName: 'MultiGet_999th_percentile',
                    TagInfo: 'MultiGet延迟的999分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:MultiGet_99.9th_percentile,MultiGet延迟',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.PUT',
                Unit: 'ms',
                Desc: 'Put延迟',
                Tags: [
                  {
                    TagName: 'Put_99th_percentile',
                    TagInfo: 'Put延迟的99分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Put_99th_percentile,Put延迟',
                  },
                  {
                    TagName: 'Put_999th_percentile',
                    TagInfo: 'Put延迟的999分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Put_99.9th_percentile,Put延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.PUTBATCH',
                Unit: 'ms',
                Desc: 'PutBatch延迟',
                Tags: [
                  {
                    TagName: 'PutBatch_99th_percentile',
                    TagInfo: 'PutBatch延迟的99分位数',
                    StatisticalMethod:
                      '数据来源 JMX Server:PutBatch_99th_percentile,PutBatch延迟的999分位数',
                  },
                  {
                    TagName: 'PutBatch_999th_percentile',
                    TagInfo: 'PutBatch延迟',
                    StatisticalMethod:
                      '数据来源 JMX Server:PutBatch_99.9th_percentile,PutBatch延迟',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.QUEUE',
                Unit: '个',
                Desc: '操作队列请求数',
                Tags: [
                  {
                    TagName: 'splitQueueLength',
                    TagInfo: 'Split 队列长度',
                    StatisticalMethod: '数据来源 JMX Server:splitQueueLength',
                  },
                  {
                    TagName: 'compactionQueueLength',
                    TagInfo: 'Compaction 队列长度',
                    StatisticalMethod:
                      '数据来源 JMX Server:compactionQueueLength',
                  },
                  {
                    TagName: 'flushQueueLength',
                    TagInfo: 'Region Flush 队列长度',
                    StatisticalMethod: '数据来源 JMX Server:flushQueueLength',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.REPLAY',
                Unit: '次',
                Desc: 'Replay操作次数',
                Tags: [
                  {
                    TagName: 'Replay_num_ops',
                    TagInfo: 'Replay 操作次数',
                    StatisticalMethod:
                      '数据来源 JMX Server:Replay_num_ops，计算统计周期内的差值',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.SLOW',
                Unit: '次',
                Desc: '慢操作次数',
                Tags: [
                  {
                    TagName: 'slowAppendCount',
                    TagInfo: 'Append 请求时间超过1s的数量',
                    StatisticalMethod:
                      '数据来源 JMX Server:slowAppendCount，计算累计值增量，表示Append 请求时间超过1s的数量',
                  },
                  {
                    TagName: 'slowDeleteCount',
                    TagInfo: 'Delete 请求时间超过1s的数量',
                    StatisticalMethod:
                      '数据来源 JMX Server:slowDeleteCount，计算累计值增量，表示Delete 请求时间超过1s的数量',
                  },
                  {
                    TagName: 'slowGetCount',
                    TagInfo: 'Get 请求时间超过1s的数量',
                    StatisticalMethod:
                      '数据来源 JMX Server:slowGetCount，计算累计值增量，表示Get 请求时间超过1s的数量',
                  },
                  {
                    TagName: 'slowIncrementCount',
                    TagInfo: 'Increment 请求时间超过1s的数量',
                    StatisticalMethod:
                      '数据来源 JMX Server:slowIncrementCount，计算累计值增量，表示Increment 请求时间超过1s的数量',
                  },
                  {
                    TagName: 'slowPutCount',
                    TagInfo: 'Put 请求时间超过1s的数量',
                    StatisticalMethod:
                      '数据来源 JMX Server:slowPutCount，计算累计值增量，表示Put 请求时间超过1s的数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.SPLIT',
                Unit: '次',
                Desc: 'split请求',
                Tags: [
                  {
                    TagName: 'splitRequestCount',
                    TagInfo: 'split 请求数',
                    StatisticalMethod:
                      '数据来源 JMX Server:splitRequestCount，计算累计值增量，表示split 请求数',
                  },
                  {
                    TagName: 'splitSuccessCount',
                    TagInfo: 'split 成功次数',
                    StatisticalMethod:
                      '数据来源 JMX Server:splitSuccessCount，计算累计值增量，表示split 成功次数',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '缓存',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.SERVER.BLOCKCACHE.COUNT',
                Unit: '个',
                Desc: '缓存块数量',
                Tags: [
                  {
                    TagName: 'blockCacheCount',
                    TagInfo: 'Block Cache 中的 Block 数量',
                    StatisticalMethod: '数据来源 JMX Server:blockCacheCount',
                  },
                  {
                    TagName: 'blockCacheHitCount',
                    TagInfo: 'Block Cache hit 请求数',
                    StatisticalMethod: '数据来源 JMX Server:blockCacheHitCount',
                  },
                  {
                    TagName: 'blockCacheMissCount',
                    TagInfo: 'Block Cache miss 请求数',
                    StatisticalMethod:
                      '数据来源 JMX Server:blockCacheMissCount',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.BLOCKCACHE.PERCENT',
                Unit: '%',
                Desc: '读缓存命中率',
                Tags: [
                  {
                    TagName: 'blockCacheExpressHitPercent',
                    TagInfo: '读缓存命中率',
                    StatisticalMethod:
                      '数据来源 JMX Server:blockCacheExpressHitPercent，表示读缓存命中率',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.BLOCKCACHE.SIZE',
                Unit: 'Byte',
                Desc: '缓存块内存占用大小',
                Tags: [
                  {
                    TagName: 'blockCacheSize',
                    TagInfo: '缓存块内存占用大小',
                    StatisticalMethod:
                      '数据来源 JMX Server:blockCacheSize，表示缓存块内存占用大小',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.INDEX',
                Unit: 'Byte',
                Desc: '索引大小',
                Tags: [
                  {
                    TagName: 'staticBloomSize',
                    TagInfo: '未压缩的静态 Bloom Filters 大小',
                    StatisticalMethod: '数据来源 JMX Server:staticBloomSize',
                  },
                  {
                    TagName: 'staticIndexSize',
                    TagInfo: '未压缩的静态索引大小',
                    StatisticalMethod: '数据来源 JMX Server:staticIndexSize',
                  },
                  {
                    TagName: 'storeFileIndexSize',
                    TagInfo: '磁盘上 storeFile 中的索引大小',
                    StatisticalMethod: '数据来源 JMX Server:storeFileIndexSize',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '请求',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.IPC.BYTES',
                Unit: 'bytes/s',
                Desc: '读写流量',
                Tags: [
                  {
                    TagName: 'receivedBytes',
                    TagInfo: '接收数据量',
                    StatisticalMethod:
                      '数据来源 JMX Server:receivedBytes，表示接收数据量',
                  },
                  {
                    TagName: 'sentBytes',
                    TagInfo: '发送数据量',
                    StatisticalMethod:
                      '数据来源 JMX Server:sentBytes，表示发送数据量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.IPC.ProcessCallTime',
                Unit: 'ms',
                Desc: '请求处理时延',
                Tags: [
                  {
                    TagName: '99th_percentile',
                    TagInfo: '99%请求处理时延',
                    StatisticalMethod:
                      '数据来源 JMX IPC: ProcessCallTime_99th_percentile，表示请求处理时延TP99',
                  },
                  {
                    TagName: '999th_percentile',
                    TagInfo: '99.9%请求处理时延',
                    StatisticalMethod:
                      '数据来源 JMX IPC: ProcessCallTime_99.9th_percentile，表示请求处理时延TP99.9',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.IPC.QueueCallTime',
                Unit: 'ms',
                Desc: '请求排队时延',
                Tags: [
                  {
                    TagName: '99th_percentile',
                    TagInfo: '99%请求排队时延',
                    StatisticalMethod:
                      '数据来源 JMX IPC: QueueCallTime_99th_percentile，表示请求排队时延TP99',
                  },
                  {
                    TagName: '999th_percentile',
                    TagInfo: '99.9%请求排队时延',
                    StatisticalMethod:
                      '数据来源 JMX IPC: QueueCallTime_99.9th_percentile，表示请求排队时延TP99.9',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.REQCOUNT',
                Unit: '个/s',
                Desc: '读写请求量',
                Tags: [
                  {
                    TagName: 'Total',
                    TagInfo: '总请求量，当有Scan请求时，该值会小于读写请求之和',
                    StatisticalMethod:
                      '数据来源 JMX Server:totalRequestCount，计算累计值每秒增量，表示总请求量，当有Scan请求时，该值会小于读写请求之和',
                  },
                  {
                    TagName: 'Read',
                    TagInfo: '读请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:readRequestCount，计算累计值每秒增量，表示读请求量',
                  },
                  {
                    TagName: 'Write',
                    TagInfo: '写请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:writeRequestCount，计算累计值每秒增量，表示写请求量',
                  },
                  {
                    TagName: 'Append_num_ops',
                    TagInfo: 'Append 请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:Append_num_ops，计算累计值每秒增量，表示Append 请求量',
                  },
                  {
                    TagName: 'Mutate_num_ops',
                    TagInfo: 'Mutate 请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:Mutate_num_ops，计算累计值每秒增量，表示Mutate 请求量',
                  },
                  {
                    TagName: 'Delete_num_ops',
                    TagInfo: 'Delete 请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:Delete_num_ops，计算累计值每秒增量，表示Delete 请求量',
                  },
                  {
                    TagName: 'Increment_num_ops',
                    TagInfo: 'Increment 请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:Increment_num_ops，计算累计值每秒增量，表示Increment_num_ops',
                  },
                  {
                    TagName: 'Get_num_ops',
                    TagInfo: 'Get 请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:Get_num_ops，计算累计值每秒增量，表示Get 请求量',
                  },
                  {
                    TagName: 'ScanTime_num_ops',
                    TagInfo: 'Scan 请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanTime_num_ops，计算累计值每秒增量，表示Scan 请求量',
                  },
                  {
                    TagName: 'ScanSize_num_ops',
                    TagInfo: 'Scan 请求量',
                    StatisticalMethod:
                      '数据来源 JMX Server:ScanSize_num_ops，计算累计值每秒增量，表示Scan 请求量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.MUTATION.COUNT',
                Unit: '个',
                Desc: 'muation个数',
                Tags: [
                  {
                    TagName: 'mutationsWithoutWALCount',
                    TagInfo: 'muation 个数',
                    StatisticalMethod:
                      '数据来源 JMX Server:mutationsWithoutWALCount，计算统计周期内的增量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.SERVER.MUTATION.SIZE',
                Unit: 'Byte',
                Desc: 'mutation大小',
                Tags: [
                  {
                    TagName: 'mutationsWithoutWALSize',
                    TagInfo: 'mutation 大小',
                    StatisticalMethod:
                      '数据来源 JMX Server:mutationsWithoutWALSize，计算统计周期内的增量',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.STARTTIME',
                Unit: 's',
                Desc: '进程启动时间',
                Tags: [
                  {
                    TagName: 'regionServerStartTime',
                    TagInfo: '进程启动时间',
                    StatisticalMethod:
                      '数据来源 JMX Server:regionServerStartTime，表示进程启动时间',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '集群同步',
            MetricMetas: [
              {
                Name: 'HBASE.REGIONSERVER.REP.LOG',
                Unit: '个',
                Desc: '队列中的WAL个数',
                Tags: [
                  {
                    TagName: 'source.sizeOfLogQueue',
                    TagInfo: '队列中的WAL个数',
                    StatisticalMethod:
                      '数据来源 JMX Replication:source.sizeOfLogQueue',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HBASE.REGIONSERVER.REP.TIME',
                Unit: 'ms',
                Desc: '距离最上一个edit被传输的间隔时间',
                Tags: [
                  {
                    TagName: 'source.ageOfLastShippedOp',
                    TagInfo: '距离最上一个edit被传输的间隔时间',
                    StatisticalMethod:
                      '数据来源 JMX Replication:source.ageOfLastShippedOp',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
      {
        Name: 'HMaster',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HBASE.HM.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.HM.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.HM.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.JVM.LOG_TOTAL',
                Unit: '次',
                Desc: 'JVM日志数量',
                Tags: [
                  {
                    TagName: 'LogFatal',
                    TagInfo: 'FATAL级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogFatal 变化量，表示FATAL日志数量',
                  },
                  {
                    TagName: 'LogError',
                    TagInfo: 'ERROR级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogError 变化量，表示ERROR日志数量',
                  },
                  {
                    TagName: 'LogWarn',
                    TagInfo: 'WARN级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogWarn 变化量，表示WARN日志数量',
                  },
                  {
                    TagName: 'LogInfo',
                    TagInfo: 'INFO级别日志数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:LogInfo 变化量，表示INFO日志数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: '进程使用的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: '进程 commit 的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: '进程最大的非堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapMaxM，表示进程可使用的非堆内存最大值，没有则表示无最大限制',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: '进程使用的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: '进程 commit 的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: '进程最大的堆内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemMaxM',
                    TagInfo: '进程最大内存大小',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemMaxM，表示进程最大内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.JVM.THREADS',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '当前NEW状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsNew，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '当前RUNNABLE状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsRunnable，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '当前BLOCKED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsBlocked，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '当前WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '当前TIMED_WAITING状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTimedWaiting，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '当前TERMINATED状态线程数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:ThreadsTerminated，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'RPC',
            MetricMetas: [
              {
                Name: 'HBASE.MASTER.IPC.CONNECTIONS',
                Unit: '个',
                Desc: 'RPC连接数',
                Tags: [
                  {
                    TagName: 'numOpenConnections',
                    TagInfo: 'RPC 连接数',
                    StatisticalMethod:
                      '数据来源 JMX Master:numOpenConnections，表示RPC 连接数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.IPC.EXCEPTION',
                Unit: '次',
                Desc: 'RPC异常次数',
                Tags: [
                  {
                    TagName: 'FailedSanityCheckException',
                    TagInfo: 'FailedSanityCheckException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX Master:FailedSanityCheckException，计算累计值增量，表示FailedSanityCheckException 异常次数',
                  },
                  {
                    TagName: 'NotServingRegionException',
                    TagInfo: 'NotServingRegionException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX Master:NotServingRegionException，计算累计值增量，表示NotServingRegionException 异常次数',
                  },
                  {
                    TagName: 'OutOfOrderScannerNextException',
                    TagInfo: 'OutOfOrderScannerNextException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX Master:OutOfOrderScannerNextException，计算累计值增量，表示OutOfOrderScannerNextException 异常次数',
                  },
                  {
                    TagName: 'RegionMovedException',
                    TagInfo: 'RegionMovedException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX Master:RegionMovedException，计算累计值增量，表示RegionMovedException 异常次数',
                  },
                  {
                    TagName: 'RegionTooBusyException',
                    TagInfo: 'RegionTooBusyException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX Master:RegionTooBusyException，计算累计值增量，表示RegionTooBusyException 异常次数',
                  },
                  {
                    TagName: 'UnknownScannerException',
                    TagInfo: 'UnknownScannerException 异常次数',
                    StatisticalMethod:
                      '数据来源 JMX Master:UnknownScannerException，计算累计值增量，表示UnknownScannerException 异常次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HBASE.MASTER.IPC.QUEUE',
                Unit: '个',
                Desc: 'RPC队列请求数',
                Tags: [
                  {
                    TagName: 'numCallsInPriorityQueue',
                    TagInfo: '通用队列 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInPriorityQueue，表示通用队列 RPC 请求数',
                  },
                  {
                    TagName: 'numCallsInReplicationQueue',
                    TagInfo: '复制队列 RPC 请求数',
                    StatisticalMethod:
                      '数据来源 JMX IPC:numCallsInReplicationQueue，表示复制队列 RPC 请求数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HBASE.MASTER.SERVER.TIME',
                Unit: 's',
                Desc: '进程启动时间',
                Tags: [
                  {
                    TagName: 'masterActiveTime',
                    TagInfo: 'Master 进程 Active 时间',
                    StatisticalMethod:
                      '数据来源 JMX Master:masterActiveTime，表示Master 进程 Active 时间',
                  },
                  {
                    TagName: 'masterStartTime',
                    TagInfo: 'Master 进程启动时间',
                    StatisticalMethod:
                      '数据来源 JMX Master:masterStartTime，表示Master 进程启动时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'HIVE',
    Namespace: [
      {
        Name: 'HiveMetaStore',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HIVE.HMS.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.JVM.PAUSE',
                Unit: 'ms/s',
                Desc: 'GC额外睡眠时间',
                Tags: [
                  {
                    TagName: 'ExtraSleepTime',
                    TagInfo: 'GC额外睡眠时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=jvm.pause.extraSleepTime，单位转换为秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '操作',
            MetricMetas: [
              {
                Name: 'HIVE.HMS.ACTIVE_CALLS_API_ALTER_TABLE',
                Unit: 'count',
                Desc: '当前活跃alter table请求数',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '当前活跃alter table请求数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_alter_table,当前活跃alter table请求数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.ACTIVE_CALLS_API_CREATE_TABLE',
                Unit: 'count',
                Desc: '当前活跃create table请求数',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '当前活跃create table请求数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_create_table,当前活跃create table请求数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.ACTIVE_CALLS_API_DROP_TABLE',
                Unit: 'count',
                Desc: '当前活跃drop table请求数',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '当前活跃drop table请求数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_drop_table,当前活跃drop table请求数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_ALTER_TABLE',
                Unit: 'ms',
                Desc: 'alter table请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'alter table平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_alter_table,alter table平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_ALTER_TABLE_WITH_ENV_CONTEXT',
                Unit: 'ms',
                Desc: 'alter table with env context请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'alter table with env context请求平均时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_alter_table_with_environment_context,alter table with env context平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_CREATE_TABLE',
                Unit: 'ms',
                Desc: 'create table请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'create table平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_create_table,create table平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_CREATE_TABLE_WITH_ENV_CONTEXT',
                Unit: 'ms',
                Desc: 'create table with env context请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'create table with env context平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_create_table_with_environment_context,create table with env context平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_DROP_TABLE',
                Unit: 'ms',
                Desc: 'drop table请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'drop table平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_drop_table,drop table平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_DROP_TABLE_WITH_ENV_CONTEXT',
                Unit: 'ms',
                Desc: 'drop table with env context请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'drop table with env context平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_drop_table_with_environment_context,drop table with env context平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_GET_DATABASE',
                Unit: 'ms',
                Desc: 'get database请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'get database平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_get_database,get database请求时间平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_GET_MULTI_TABLE',
                Unit: 'ms',
                Desc: 'get multi table请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'get multi table平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_get_multi_table,get multi table平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_GET_TABLE',
                Unit: 'ms',
                Desc: 'get table请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'get table平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_get_table,get table平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_GET_TABLE_OBJECTS_BY_NAME_REQ',
                Unit: 'ms',
                Desc: 'get table objects by name req请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'get table req平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_get_table_objects_by_name_req,get table objects by name req请求时间平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_GET_TABLE_REQ',
                Unit: 'ms',
                Desc: 'get table req请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'get table req平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_get_table_req,get table req请求时间平均请求时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.API_GET_TABLES',
                Unit: 'ms',
                Desc: 'get tables请求时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'get tables平均请求时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_get_tables,get tables平均请求时间',
                  },
                ],
                Selected: false,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HIVE.HMS.OPEN.CONNECTIONS',
                Unit: '个',
                Desc: '打开连接数量',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '打开连接数量',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=open_connections',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: '进程CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuLoad，表示进程CPU 利用率',
                  },
                  {
                    TagName: 'SystemCpuLoad',
                    TagInfo: '系统CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:SystemCpuLoad，表示系统CPU 利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: 'CPU 累计使用时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.OS.CPU.USED',
                Unit: 'seconds per second',
                Desc: 'CPU使用时间占比',
                Tags: [
                  {
                    TagName: 'CPURate',
                    TagInfo: 'CPU使用时间占比',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:SystemCpuLoad，表示CPU使用时间占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'HIVE.HMS.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时长',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时长',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HMS.THREAD.COUNT',
                Unit: '个',
                Desc: '工作线程数',
                Tags: [
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: 'Daemon 线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:DaemonThreadCount，表示进程当前的 Daemon 线程个数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '总线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ThreadCount，表示进程当前的线程个数',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
      {
        Name: 'HiveServer2',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HIVE.H2.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.JVM.MEM.STAT.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用占比',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.JVM.PAUSE',
                Unit: 'ms/s',
                Desc: 'GC额外睡眠时间',
                Tags: [
                  {
                    TagName: 'ExtraSleepTime',
                    TagInfo: 'GC额外睡眠时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=jvm.pause.extraSleepTime，单位转换为秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '会话',
            MetricMetas: [
              {
                Name: 'HIVE.H2.ACTIVE.SESSIONS',
                Unit: '个',
                Desc: '当前活跃的session个数',
                Tags: [
                  {
                    TagName: 'ActiveSessions',
                    TagInfo: '当前活跃的session个数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_active_sessions',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.OPEN.SESSIONS',
                Unit: '个',
                Desc: '会话数量',
                Tags: [
                  {
                    TagName: 'OpenSessions',
                    TagInfo: '会话数量',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_open_sessions',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '操作',
            MetricMetas: [
              {
                Name: 'HIVE.H2.ACTIVE.CALLS.API',
                Unit: '个',
                Desc: 'API请求数',
                Tags: [
                  {
                    TagName: 'GetSplits',
                    TagInfo: '当前getSplits数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_getSplits',
                  },
                  {
                    TagName: 'SemanticAnalyze',
                    TagInfo: '当前semanticAnalyze请求数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_semanticAnalyze',
                  },
                  {
                    TagName: 'RunTasks',
                    TagInfo: '当前runtask请求数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_runTasks',
                  },
                  {
                    TagName: 'ReleaseLocks',
                    TagInfo: '当前releaseLocks请求数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_releaseLocks',
                  },
                  {
                    TagName: 'SerializePlan',
                    TagInfo: '当前serializePlan请求数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=active_calls_api_serializePlan',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.COMPLETED.OPERATION',
                Unit: '个/s',
                Desc: 'Hive操作数量',
                Tags: [
                  {
                    TagName: 'Closed',
                    TagInfo: '关闭的操作数量',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_completed_operation_CLOSED',
                  },
                  {
                    TagName: 'Finished',
                    TagInfo: '完成的操作数量',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_completed_operation_FINISHED',
                  },
                  {
                    TagName: 'Canceled',
                    TagInfo: '取消的操作数量',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_completed_operation_CANCELED',
                  },
                  {
                    TagName: 'Error',
                    TagInfo: '出错的操作数量',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_completed_operation_ERROR',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.EXECUTING.QUERIES',
                Unit: 'ms',
                Desc: '执行查询的时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: '执行查询的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_executing_queries,取Mean',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.FAILED.QUERIES.RATE',
                Unit: '个/min',
                Desc: '失败查询',
                Tags: [
                  {
                    TagName: 'OneMinuteRate',
                    TagInfo: '失败查询OneMinuteRate',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_failed_queries,统计方式取OneMinuteRate',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.MR.TASKS',
                Unit: '个',
                Desc: '提交的Hive on MR作业数',
                Tags: [
                  {
                    TagName: 'MRTasks',
                    TagInfo: '提交的Hive on MR作业数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hive_mapred_tasks,统计方式取两次采集差值',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.SPARK.TASKS',
                Unit: '个',
                Desc: '提交的Hive on Spark作业数',
                Tags: [
                  {
                    TagName: 'SparkTasks',
                    TagInfo: '提交的Hive on Spark作业数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hive_spark_tasks,统计方式取两次采集差值',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.SQL.OPERATION',
                Unit: '个',
                Desc: '当前活跃用户数',
                Tags: [
                  {
                    TagName: 'ActiveUsers',
                    TagInfo: '当前活跃用户数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_sql_operation_active_user',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.SQL.OPERATION.PENDING',
                Unit: 'ms',
                Desc: 'SQL任务处于PEDING状态的时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'SQL任务处于PEDING状态的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_hs2_sql_operation_PENDING,取Mean',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.SQL.OPERATION.RUNNING',
                Unit: 'ms',
                Desc: 'SQL任务处于RUNNING状态的时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: 'SQL任务处于RUNNING状态的平均时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_hs2_sql_operation_RUNNING,取Mean',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.SUBMITTED.QUERIES',
                Unit: 'ms',
                Desc: '提交查询的时间',
                Tags: [
                  {
                    TagName: 'Mean',
                    TagInfo: '提交查询的时间',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hs2_submitted_queries,取Mean',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.TEZ.TASKS',
                Unit: '个',
                Desc: '提交的Hive on Tez作业数',
                Tags: [
                  {
                    TagName: 'TezTasks',
                    TagInfo: '提交的Hive on Tez作业数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=hive_tez_tasks,统计方式取两次采集差值',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'HIVE.H2.API.DRIVER.RUN',
                Unit: 'ms',
                Desc: 'DRIVER执行时延',
                Tags: [
                  {
                    TagName: '99th_percentile',
                    TagInfo: 'Driver执行99%的时延',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_Driver.run  99thPercentile',
                  },
                  {
                    TagName: 'Avg',
                    TagInfo: 'Driver执行平均执行时延',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=api_Driver.run   Mean',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.EXEC.ASYNC.POOL.SIZE',
                Unit: '个',
                Desc: 'hs2异步线程池当前大小',
                Tags: [
                  {
                    TagName: 'PoolSize',
                    TagInfo: 'hs2异步线程池当前大小',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=exec_async_pool_size',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.EXEC.ASYNC.QUEUE.SIZE',
                Unit: '个',
                Desc: 'hs2异步操作队列当前大小',
                Tags: [
                  {
                    TagName: 'QueueSize',
                    TagInfo: 'hs2异步操作队列当前大小',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=exec_async_queue_size',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.OPEN.CONNECTIONS',
                Unit: '个',
                Desc: '打开连接数量',
                Tags: [
                  {
                    TagName: 'NumOpenConnections',
                    TagInfo: '打开连接数量',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=open_connections',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuLoad，表示CPU 利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: 'CPU 累计使用时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.OS.CPU.USED',
                Unit: 'seconds per second',
                Desc: 'CPU使用时间占比',
                Tags: [
                  {
                    TagName: 'CPURate',
                    TagInfo: 'CPU使用时间占比',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:SystemCpuLoad，表示CPU使用时间占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时长',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时长',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.H2.THREAD.COUNT',
                Unit: '个',
                Desc: '工作线程数',
                Tags: [
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: 'Daemon 线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:DaemonThreadCount，表示进程当前的 Daemon 线程个数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '总线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ThreadCount，表示进程当前的线程个数',
                  },
                  {
                    TagName: 'Blocked',
                    TagInfo: 'JVM blocked线程数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=threads.blocked.count，表示进程当前JVM blocked线程数',
                  },
                  {
                    TagName: 'Deadlock',
                    TagInfo: 'JVM deadlock线程数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=threads.deadlock.count，表示进程当前JVM deadlock线程数',
                  },
                  {
                    TagName: 'New',
                    TagInfo: 'JVM runnable线程数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=threads.new.count，表示进程当前JVM new状态线程数',
                  },
                  {
                    TagName: 'Runnable',
                    TagInfo: 'JVM terminated线程数',
                    StatisticalMethod:
                      '数据来源 JMX metrics:name=threads.runnable.count，表示进程当前的JVM runnable线程数',
                  },
                  {
                    TagName: 'TimedWaiting',
                    TagInfo: 'JVM timed_waiting线程数',
                    StatisticalMethod:
                      '数据来源 JMX metric:name=threads.timed_waiting.count，表示进程当前JVM timed_waiting线程数',
                  },
                  {
                    TagName: 'Waiting',
                    TagInfo: 'JVM waiting线程数',
                    StatisticalMethod:
                      '数据来源 JMX metric:name=threads.waiting.count，表示进程当前JVM waiting线程数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'HiveWebHcat',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'HIVE.HC.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HC.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'HIVE.HC.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'ZOOKEEPER',
    Namespace: [
      {
        Name: 'Zookeeper',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'ZK.QM.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '延迟',
            MetricMetas: [
              {
                Name: 'ZK.LATENCY',
                Unit: 'ms',
                Desc: '延迟',
                Tags: [
                  {
                    TagName: 'zk_avg_latency',
                    TagInfo: 'zk 处理平均延迟',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_avg_latency一行，表示zk 处理平均延迟',
                  },
                  {
                    TagName: 'zk_max_latency',
                    TagInfo: 'zk 处理最大时延',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_max_latency一行，表示zk 处理最大时延',
                  },
                  {
                    TagName: 'zk_min_latency',
                    TagInfo: 'zk 处理最小时延',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_min_latency一行，表示zk 处理最小时延',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '数据',
            MetricMetas: [
              {
                Name: 'ZK.DATA.COUNT',
                Unit: '个',
                Desc: 'ZNODE个数',
                Tags: [
                  {
                    TagName: 'zk_watch_count',
                    TagInfo: 'zk 的 watch 数目',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_watch_count一行，表示zk 的 watch 数目',
                  },
                  {
                    TagName: 'zk_znode_count',
                    TagInfo: 'zk 的 znode 数量',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_znode_count一行，表示zk 的 znode 数量',
                  },
                  {
                    TagName: 'zk_ephemerals_count',
                    TagInfo: 'zk 的临时节点数目',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_ephemerals_count一行，表示zk 的临时节点数目',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.DATA.SIZE',
                Unit: 'Byte',
                Desc: '数据大小',
                Tags: [
                  {
                    TagName: 'zk_approximate_data_size',
                    TagInfo: 'zk 存储数据量',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_approximate_data_size一行，表示zk 存储数据量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '状态',
            MetricMetas: [
              {
                Name: 'ZK.STATE',
                Unit: '1:主,0:备,2:单机',
                Desc: '节点状态',
                Tags: [
                  {
                    TagName: 'zk_server_state',
                    TagInfo: 'zk 节点状态',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_min_latency一行，表示zk 节点状态',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '请求',
            MetricMetas: [
              {
                Name: 'ZK.PACKETS',
                Unit: '个/s',
                Desc: '接收发送包量',
                Tags: [
                  {
                    TagName: 'zk_packets_received',
                    TagInfo: 'zk 接收的数据包速率',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_packets_received一行，表示zk 接收的数据包速率',
                  },
                  {
                    TagName: 'zk_packets_sent',
                    TagInfo: 'zk 发送的数据包速率',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_packets_sent一行，表示zk 发送的数据包速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.REQUESTS.OUTSTANDING',
                Unit: '个',
                Desc: '排队请求数',
                Tags: [
                  {
                    TagName: 'zk_outstanding_requests',
                    TagInfo: '排队请求数',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_outstanding_requests一行，表示排队请求数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'ZK.CONNECTIONS.NUM',
                Unit: '个',
                Desc: '连接数',
                Tags: [
                  {
                    TagName: 'zk_num_alive_connections',
                    TagInfo: '当前连接数',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_num_alive_connections一行，表示当前连接数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuLoad，表示CPU 利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: 'CPU 累计使用时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'zk_max_file_descriptor_count',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_max_file_descriptor_count一行，表示最大文件描述符数',
                  },
                  {
                    TagName: 'zk_open_file_descriptor_count',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 ZK mntr命令zk_open_file_descriptor_count一行，表示已打开文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时长',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时长',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZK.QM.THREAD.COUNT',
                Unit: '个',
                Desc: '工作线程数',
                Tags: [
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: 'Daemon 线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:DaemonThreadCount，表示进程当前的 Daemon 线程个数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '总线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ThreadCount，表示进程当前的线程个数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'SPARK',
    Namespace: [
      {
        Name: 'SparkJobHistoryServer',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'SPARK.SH.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARK.SH.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'SPARK.SH.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'KUDU',
    Namespace: [
      {
        Name: 'KuduMaster',
        Groups: [
          {
            Title: 'RPC',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.RPC.CONNECTIONS',
                Unit: 'count/s',
                Desc: 'RPC请求',
                Tags: [
                  {
                    TagName: 'ConnectionsAccepted',
                    TagInfo: '到RPC服务器的连入TCP连接数',
                    StatisticalMethod:
                      '数据来源 metrics:rpc_connections_accepted/Duration',
                  },
                  {
                    TagName: 'QueueOverflow',
                    TagInfo: '由于服务队列已满而丢弃的RPC数',
                    StatisticalMethod:
                      '数据来源 metrics:rpcs_queue_overflow/Duration',
                  },
                  {
                    TagName: 'TimesOutInQueue',
                    TagInfo: '在服务队列中等待时超时并因此未被处理的RPC数',
                    StatisticalMethod:
                      '数据来源 metrics:rpcs_timed_out_in_queue/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.RPC.CONSENSUSSERVICE.RUNLEADERELECTION',
                Unit: '微秒',
                Desc: 'RPC RunLeaderElection',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_consensus_ConsensusService_RunLeaderElection',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_consensus_ConsensusService_RunLeaderElection',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_consensus_ConsensusService_RunLeaderElection',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_consensus_ConsensusService_RunLeaderElection',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_consensus_ConsensusService_RunLeaderElection',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.RPC.MASTERSERVICE.CONNECTTOMASTER',
                Unit: '微秒',
                Desc: 'RPC ConnectToMaster',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_ConnectToMaster',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_ConnectToMaster',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_ConnectToMaster',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_ConnectToMaster',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_ConnectToMaster',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.RPC.MASTERSERVICE.PING',
                Unit: '微秒',
                Desc: 'RPC Ping',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_Ping',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_Ping',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_Ping',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_Ping',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_Ping',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.RPC.MASTERSERVICE.TSHEARTBEAT',
                Unit: '微秒',
                Desc: 'RPC TSHeartbeat',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_TSHeartbeat',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_TSHeartbeat',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_TSHeartbeat',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_TSHeartbeat',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_master_MasterService_TSHeartbeat',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.RPC.TABLETCOPYSERVICE.FETCHDATA',
                Unit: '微秒',
                Desc: 'RPC FetchData',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'TCMalloc',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.TCMALLOC.MEMORY',
                Unit: 'bytes',
                Desc: 'TCMalloc内存',
                Tags: [
                  {
                    TagName: 'HeapSize',
                    TagInfo: 'TCMalloc保留的系统内存字节',
                    StatisticalMethod: '数据来源 metrics:generic_heap_size',
                  },
                  {
                    TagName: 'CurrentThreadCacheBytes',
                    TagInfo: 'TCMalloc正在使用的内存的度量（对于小对象）',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_current_total_thread_cache_bytes',
                  },
                  {
                    TagName: 'TotalThreadCacheBytes',
                    TagInfo: 'TCMalloc用于小对象的内存限制',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_max_total_thread_cache_bytes',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.TCMALLOC.PAGEHEAP',
                Unit: 'bytes',
                Desc: 'TCMalloc PageHeap',
                Tags: [
                  {
                    TagName: 'FreeBytes',
                    TagInfo: '页堆中可用的映射页的字节数',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_pageheap_free_bytes',
                  },
                  {
                    TagName: 'UnMappedBytes',
                    TagInfo: '页堆中空闲的未映射页的字节数',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_pageheap_unmapped_bytes',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'tablet',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.CLUSTER.REPLICA.SKEW',
                Unit: '个',
                Desc: 'tablet副本差值',
                Tags: [
                  {
                    TagName: '',
                    TagInfo:
                      '承载最多副本的tablet服务器上的副本数与承载最少副本的tablet服务器上的副本数之间的差异',
                    StatisticalMethod: '数据来源 metrics:cluster_replica_skew',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.NUM.RAFT.LEADERS',
                Unit: '个',
                Desc: 'tablet leader个数',
                Tags: [
                  {
                    TagName: 'NumRaftLeaders',
                    TagInfo: 'Raft leaders的tablet副本数量',
                    StatisticalMethod: '数据来源 metrics:num_raft_leaders',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.OPEN.SOURCE.SESSIONS',
                Unit: '个',
                Desc: 'tablet session数',
                Tags: [
                  {
                    TagName: 'OpemSourceSessions',
                    TagInfo: '此服务器上当前打开的tablet复制源session个数',
                    StatisticalMethod:
                      '数据来源 metrics:tablet_copy_open_source_sessions',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '块管理器',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.BLOCK.MANAGER.BLOCKS',
                Unit: '个',
                Desc: '块管理器block数',
                Tags: [
                  {
                    TagName: 'BlockUnderManagement',
                    TagInfo: '当前管理的数据块数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_blocks_under_management',
                  },
                  {
                    TagName: 'BlockOpenReading',
                    TagInfo: '当前打开供读取的数据块数',
                    StatisticalMethod:
                      '数据来源 metrics:block_manager_blocks_open_reading',
                  },
                  {
                    TagName: 'BlockOpenWriting',
                    TagInfo: '当前打开进行写入的数据块数',
                    StatisticalMethod:
                      '数据来源 metrics:block_manager_blocks_open_writing',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.BLOCK.MANAGER.BYTES',
                Unit: 'bytes',
                Desc: '块管理器字节数',
                Tags: [
                  {
                    TagName: 'BytesUnderManagement',
                    TagInfo: '当前管理的数据块字节数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_bytes_under_management',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.BLOCK.MANAGER.CONTAINER',
                Unit: '个',
                Desc: '块管理器容器数',
                Tags: [
                  {
                    TagName: 'ContainersUnderManagement',
                    TagInfo: '日志块容器数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_containers',
                  },
                  {
                    TagName: 'FullContainersUnderManagement',
                    TagInfo: '完整日志块容器数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_full_containers',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '混合时钟',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.HYBRID.CLOCK.ERROR',
                Unit: '微秒',
                Desc: '混合时钟错误',
                Tags: [
                  {
                    TagName: 'HybridClockError',
                    TagInfo: '服务器时钟最大错误；无法读取基础时钟时返回2^64-1',
                    StatisticalMethod: '数据来源 metrics:hybrid_clock_error',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.HYBRID.CLOCK.TIMESTAMP',
                Unit: '微秒',
                Desc: '混合时钟时间戳',
                Tags: [
                  {
                    TagName: 'HybridClockTimestamp',
                    TagInfo: '混合时钟时间戳；无法读取基础时钟时返回2^64-1',
                    StatisticalMethod:
                      '数据来源 metrics:hybrid_clock_timestamp',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '缓存',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.BLOCK.CACHE',
                Unit: 'count/s',
                Desc: '块缓存命中',
                Tags: [
                  {
                    TagName: 'BlockCacheHit',
                    TagInfo:
                      '指标采集周期内平均每秒期望一个块并查找到的次数。当确定缓存的效率时，使用此值代替cache_hits',
                    StatisticalMethod:
                      '数据来源 metrics:block_cache_hits_caching/Duration',
                  },
                  {
                    TagName: 'BlockCacheMiss',
                    TagInfo:
                      '指标采集周期内平均每秒预期未生成块的查找数。使用此值来确定缓存的效率，而不是cache_misses ',
                    StatisticalMethod:
                      '数据来源 metrics:block_cache_misses_caching/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.BLOCK.CACHE.USAGE',
                Unit: 'bytes',
                Desc: '块缓存使用率',
                Tags: [
                  {
                    TagName: 'BlockCacheUsage',
                    TagInfo: '块缓存占用的内存',
                    StatisticalMethod: '数据来源 metrics:block_cache_usage',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.FILE.CACHE',
                Unit: 'count/s',
                Desc: '文件缓存命中',
                Tags: [
                  {
                    TagName: 'FileCacheHit',
                    TagInfo:
                      '指标采集周期内平均每秒预期并命中文件描述符的查找数。当确定缓存的效率时，使用此值代替cache_hits',
                    StatisticalMethod:
                      '数据来源 metrics:file_cache_hits_caching/Duration',
                  },
                  {
                    TagName: 'FileCacheMiss',
                    TagInfo:
                      '指标采集周期内平均每秒预期但未命中文件描述符的查找数。当确定缓存的效率时，使用此值代替cache_misses ',
                    StatisticalMethod:
                      '数据来源 metrics:file_cache_misses_caching/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.FILE.CACHE.USAGE',
                Unit: '个',
                Desc: '文件缓存使用率',
                Tags: [
                  {
                    TagName: 'FileCacheUsage',
                    TagInfo: '文件缓存中的条目数',
                    StatisticalMethod: '数据来源 metrics:file_cache_usage',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.ALLOCATED.BYTES',
                Unit: '个',
                Desc: '分配的字节',
                Tags: [
                  {
                    TagName: 'AllocatedBytes',
                    TagInfo:
                      '应用程序使用的字节数。这通常与操作系统报告的内存使用情况不匹配，因为它不包括TCMalloc开销或内存碎片。',
                    StatisticalMethod:
                      '数据来源 metrics:generic_current_allocated_bytes',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.CONTEXT.SWITCHES',
                Unit: 'count/s',
                Desc: '上下文',
                Tags: [
                  {
                    TagName: 'InvoluntarySwitches',
                    TagInfo: '指标采集周期内平均每秒非自发的上下文切换',
                    StatisticalMethod:
                      '数据来源 metrics:involuntary_context_switches/Duration',
                  },
                  {
                    TagName: 'voluntary_context_switches',
                    TagInfo: '指标采集周期内平均每秒自发的上下文切换',
                    StatisticalMethod:
                      '数据来源 metrics:voluntary_context_switches/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.CPU.TIME',
                Unit: '毫秒',
                Desc: 'Cpu时间',
                Tags: [
                  {
                    TagName: 'CpuStime',
                    TagInfo: '进程的总系统CPU时间',
                    StatisticalMethod: '数据来源 metrics:cpu_stime',
                  },
                  {
                    TagName: 'CpuUtime',
                    TagInfo: '进程的用户CPU总时间',
                    StatisticalMethod: '数据来源 metrics:cpu_utime',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.DATA.DIR',
                Unit: '个',
                Desc: '数据路径',
                Tags: [
                  {
                    TagName: 'DataDirsFailed',
                    TagInfo: '磁盘当前处于故障状态的数据目录数',
                    StatisticalMethod: '数据来源 metrics:data_dirs_failed',
                  },
                  {
                    TagName: 'DataDirsFull',
                    TagInfo: '磁盘当前已满的数据目录数',
                    StatisticalMethod: '数据来源 metrics:data_dirs_full',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.LOG.MESSAGES',
                Unit: 'count/s',
                Desc: '日志信息',
                Tags: [
                  {
                    TagName: 'ErrorMessages',
                    TagInfo:
                      '指标采集周期内平均每秒应用程序发出的ERROR级日志消息数',
                    StatisticalMethod:
                      '数据来源 metrics:glog_error_messages/Duration',
                  },
                  {
                    TagName: 'WarningMessages',
                    TagInfo:
                      '指标采集周期内平均每秒应用程序发出的WARNING级日志消息数',
                    StatisticalMethod:
                      '数据来源 metrics:glog_warning_messages/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.OP.APPLY.QUEUE.LENGTH',
                Unit: '个',
                Desc: '队列中操作数',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '队列中最小等待任务数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '队列中最大等待任务数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '队列中平均等待任务数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '队列中等待任务数的99.9分位数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.OP.APPLY.QUEUE.TIME',
                Unit: '微秒',
                Desc: '排队等待时间',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小等待时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大等待时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均等待时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '等待时间的99.9分位数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.OP.APPLY.RUN.TIME',
                Unit: '微秒',
                Desc: '操作运行时间',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小运行时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大运行时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均运行时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '运行时间的99.9分位数',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.SPINLOCK.CONTENTION.TIME',
                Unit: '微秒',
                Desc: '自旋锁',
                Tags: [
                  {
                    TagName: 'SpinlockContentionTime',
                    TagInfo: '自服务器启动后，内部自旋锁上的争用所消耗的时间量',
                    StatisticalMethod:
                      '数据来源 metrics:spinlock_contention_time',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.SYS.CATALOG.OVERSIZED.WRITE.REQUESTS',
                Unit: 'count/s',
                Desc: '过大的写请求数',
                Tags: [
                  {
                    TagName: 'OversizedWriteRequests',
                    TagInfo:
                      '启动后指标采集周期内平均每秒拒绝的对system catalog tablet的过大写请求数',
                    StatisticalMethod:
                      '数据来源 metrics:sys_catalog_oversized_write_requests/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.THREAD',
                Unit: '个',
                Desc: '线程',
                Tags: [
                  {
                    TagName: 'ThreadsRunning',
                    TagInfo: '当前正在运行的线程数',
                    StatisticalMethod: '数据来源 metrics:threads_running',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'KuduServer',
        Groups: [
          {
            Title: 'RPC',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.MEMORYPRESSURE.REJECTIONS',
                Unit: 'count/s',
                Desc: 'RPC 请求拒绝',
                Tags: [
                  {
                    TagName: 'leader',
                    TagInfo:
                      '在指标采集周期内平均每秒leader由于内存压力而被拒绝的RPC请求数',
                    StatisticalMethod:
                      '数据来源 metrics:leader_memory_pressure_rejections/Duration',
                  },
                  {
                    TagName: 'follower',
                    TagInfo:
                      '在指标采集周期内平均每秒follower由于内存压力而被拒绝的RPC请求数',
                    StatisticalMethod:
                      '数据来源 metrics:follower_memory_pressure_rejections/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.OP.APPLY',
                Unit: 'count/s',
                Desc: '队列过载拒写数',
                Tags: [
                  {
                    TagName: 'QueueOverloadRejections',
                    TagInfo: '指标采集周期内平均每秒因队列过载被拒绝写请求数',
                    StatisticalMethod:
                      '数据来源 metrics:op_apply_queue_overload_rejections/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.ROWS.TOTAL.RATE',
                Unit: 'count/s',
                Desc: '行操作速率',
                Tags: [
                  {
                    TagName: 'RowsInsertedRate',
                    TagInfo: '节点rows_inserted统计',
                    StatisticalMethod:
                      '数据来源：节点rows_inserted操作聚合/间隔时间',
                  },
                  {
                    TagName: 'RowsDeletedRate',
                    TagInfo: '节点rows_deleted统计',
                    StatisticalMethod:
                      '数据来源：节点rows_deleted操作聚合/间隔时间',
                  },
                  {
                    TagName: 'RowsUpsertedRate',
                    TagInfo: '节点rows_upserted统计',
                    StatisticalMethod:
                      '数据来源：节点rows_upserted操作聚合/间隔时间',
                  },
                  {
                    TagName: 'RowsUpdatedRate',
                    TagInfo: '节点rows_updated统计',
                    StatisticalMethod:
                      '数据来源：节点rows_updated操作聚合/间隔时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.QUEUE.TIME',
                Unit: '微秒',
                Desc: '接入队列时间',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_rpc_incoming_queue_time',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_rpc_incoming_queue_time',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_rpc_incoming_queue_time',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_rpc_incoming_queue_time',
                  },
                  {
                    TagName: 'Percentile_99',
                    TagInfo: '处理时间的99分位数',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_rpc_incoming_queue_time',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.REQUEST',
                Unit: 'count/s',
                Desc: 'RPC请求',
                Tags: [
                  {
                    TagName: 'ConnectionsAccepted',
                    TagInfo: '指标采集周期内平均每秒到RPC服务器的连入TCP连接数',
                    StatisticalMethod:
                      '数据来源 metrics:rpc_connections_accepted/Duration',
                  },
                  {
                    TagName: 'QueueOverflow',
                    TagInfo:
                      '指标采集周期内平均每秒由于服务队列已满而丢弃的RPC数',
                    StatisticalMethod: '数据来源 metrics:rpcs_queue_overflow',
                  },
                  {
                    TagName: 'TimesOutInQueue',
                    TagInfo: '在服务队列中等待时超时并因此未被处理的RPC数',
                    StatisticalMethod:
                      '数据来源 metrics:rpcs_timed_out_in_queue/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETADMINSERVICE.ALTERSCHEMA',
                Unit: '微秒',
                Desc: 'RPC AlterSchema',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_AlterSchema',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_AlterSchema',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_AlterSchema',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_AlterSchema',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_AlterSchema',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETADMINSERVICE.CREATETABLET',
                Unit: '微秒',
                Desc: 'RPC CreateTablet',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_CreateTablet',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_CreateTablet',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_CreateTablet',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_CreateTablet',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_CreateTablet',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETADMINSERVICE.DELETETABLET',
                Unit: '微秒',
                Desc: 'RPC DeleteTablet',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_DeleteTablet',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_DeleteTablet',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_DeleteTablet',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_DeleteTablet',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_DeleteTablet',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETADMINSERVICE.QUIESCE',
                Unit: '微秒',
                Desc: 'RPC Quiesce',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_Quiesce',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_Quiesce',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_Quiesce',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_Quiesce',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerAdminService_Quiesce',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETCOPY.FETCHDATA',
                Unit: '微秒',
                Desc: 'RPC FetchData',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletCopyService_FetchData',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETSERVER.SCAN',
                Unit: '微秒',
                Desc: 'RPC Scan',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Scan',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Scan',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Scan',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Scan',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Scan',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETSERVER.SCANNERKEEPALIVE',
                Unit: '微秒',
                Desc: 'RPC ScannerKeepAlive',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_ScannerKeepAlive',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_ScannerKeepAlive',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_ScannerKeepAlive',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_ScannerKeepAlive',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_ScannerKeepAlive',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.RPC.TABLETSERVER.WRITE',
                Unit: '微秒',
                Desc: 'RPC Write',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Write',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Write',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Write',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Write',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '处理时间的99.9分位数',
                    StatisticalMethod:
                      '数据来源 metrics:handler_latency_kudu_tserver_TabletServerService_Write',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'Scanner',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.EXPIRESCANNER',
                Unit: 'count/s',
                Desc: 'ExpScanner',
                Tags: [
                  {
                    TagName: 'ExpiredScanners',
                    TagInfo:
                      '指标采集周期内平均每秒自服务启动后由于不活动而过期的scanner个数',
                    StatisticalMethod:
                      '数据来源 metrics:scanners_expired/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.SCANNER',
                Unit: '个',
                Desc: 'Scanner',
                Tags: [
                  {
                    TagName: 'ActiveScanners',
                    TagInfo: '当前处于活动状态的scanner个数',
                    StatisticalMethod: '数据来源 metrics:active_scanners',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.SCANNER.BYTES.RATE',
                Unit: 'bytes/s',
                Desc: 'scanner速率',
                Tags: [
                  {
                    TagName: 'ScannedFromDiskRate',
                    TagInfo: 'scan 请求数据读取频率',
                    StatisticalMethod:
                      '各节点scanner_bytes_scanned_from_disk指标聚合/时间',
                  },
                  {
                    TagName: 'ScannerReturnedRate',
                    TagInfo: 'scanners 返回客户端数据频率',
                    StatisticalMethod:
                      '各节点metrics:num_raft_leaders指标聚合/时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.SCANNER.DURATION',
                Unit: '微秒',
                Desc: 'Scanner时间',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_scanner_duration',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_scanner_duration',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_scanner_duration',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均处理时间',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_scanner_duration',
                  },
                  {
                    TagName: 'Percentile_99',
                    TagInfo: '处理时间的99分位数',
                    StatisticalMethod:
                      '数据来源 metrics:tabletserver_scanner_duration',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'TCMalloc',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.TCMALLOC.MEMORY',
                Unit: 'bytes',
                Desc: 'TCMalloc内存',
                Tags: [
                  {
                    TagName: 'HeapSize',
                    TagInfo: 'TCMalloc保留的系统内存字节',
                    StatisticalMethod: '数据来源 metrics:generic_heap_size',
                  },
                  {
                    TagName: 'CurrentThreadCacheBytes',
                    TagInfo: 'TCMalloc正在使用的内存的度量（对于小对象）',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_current_total_thread_cache_bytes',
                  },
                  {
                    TagName: 'TotalThreadCacheBytes',
                    TagInfo: 'TCMalloc用于小对象的内存限制',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_max_total_thread_cache_bytes',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.TCMALLOC.PAGEHEAP',
                Unit: 'bytes',
                Desc: 'TCMalloc PageHeap',
                Tags: [
                  {
                    TagName: 'FreeBytes',
                    TagInfo: '页堆中可用的映射页的字节数',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_pageheap_free_bytes',
                  },
                  {
                    TagName: 'UnMappedBytes',
                    TagInfo: '页堆中空闲的未映射页的字节数',
                    StatisticalMethod:
                      '数据来源 metrics:tcmalloc_pageheap_unmapped_bytes',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'tablet',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.AVERAGE.DISKROWSETHEIGHT',
                Unit: 'count',
                Desc: 'Disk Rowsets 平均高度',
                Tags: [
                  {
                    TagName: 'Total',
                    TagInfo: '节点上tablet总的diskrowsets平均高度',
                    StatisticalMethod:
                      '数据来源 metrics:average_diskrowset_height',
                  },
                  {
                    TagName: 'Avg',
                    TagInfo: '节点上tablet的平均的diskrowsets平均高度 ',
                    StatisticalMethod:
                      '数据来源 metrics:average_diskrowset_height',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '节点上tablet的最大diskrowsets平均高度',
                    StatisticalMethod:
                      '数据来源 metrics:average_diskrowset_height',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.BYTESFLUSHED',
                Unit: 'bytes/s',
                Desc: 'Tablet 缓存刷新',
                Tags: [
                  {
                    TagName: 'OnDisk',
                    TagInfo:
                      '在指标采集周期内平均每秒节点上 tablet 缓存刷新数据量',
                    StatisticalMethod:
                      '数据来源 metrics:bytes_flushed/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.COMPACTRUNNING',
                Unit: 'count',
                Desc: 'Compactions Running 统计',
                Tags: [
                  {
                    TagName: 'RowSet',
                    TagInfo: '节点上tablet的RowSet合并总大小',
                    StatisticalMethod: '数据来源 metrics:compact_rs_running',
                  },
                  {
                    TagName: 'Major Delta',
                    TagInfo: '节点上tablet的Major Delta合并总大小 ',
                    StatisticalMethod:
                      '数据来源 metrics:delta_major_compact_rs_running',
                  },
                  {
                    TagName: 'Minor Delta',
                    TagInfo: '节点上tablet的Minor Delta合并总大小',
                    StatisticalMethod:
                      '数据来源 metrics:delta_minor_compact_rs_running',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.DATASIZE',
                Unit: 'bytes',
                Desc: 'Tablet 数据大小',
                Tags: [
                  {
                    TagName: 'OnDisk',
                    TagInfo: '节点上tablet数据磁盘占用大小',
                    StatisticalMethod: '数据来源 metrics:on_disk_data_size',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.NUM.RAFT.LEADERS',
                Unit: '个',
                Desc: 'tablet leader个数',
                Tags: [
                  {
                    TagName: 'NumRaftLeaders',
                    TagInfo: 'Raft leaders的tablet副本数量',
                    StatisticalMethod: '数据来源 metrics:num_raft_leaders',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.ROWSETSONDISK',
                Unit: 'count',
                Desc: 'Disk Rowsets 统计',
                Tags: [
                  {
                    TagName: 'Total',
                    TagInfo: '节点 tablet diskrowsets 总量',
                    StatisticalMethod: '数据来源 metrics:num_rowsets_on_disk',
                  },
                  {
                    TagName: 'Avg',
                    TagInfo: '节点tablet平均diskrowsets数量',
                    StatisticalMethod: '数据来源 metrics:num_rowsets_on_disk',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '节点tablet最大diskrowsets 数量',
                    StatisticalMethod: '数据来源 metrics:num_rowsets_on_disk',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.TABLET',
                Unit: '个',
                Desc: 'tablet数',
                Tags: [
                  {
                    TagName: 'TabletBootstrapping',
                    TagInfo: '当前正在bootstrap的tablet个数',
                    StatisticalMethod:
                      '数据来源 metrics:tablets_num_bootstrapping',
                  },
                  {
                    TagName: 'TabletFailed',
                    TagInfo: '失败的tablet个数',
                    StatisticalMethod: '数据来源 metrics:tablets_num_failed',
                  },
                  {
                    TagName: 'TabletInitialized',
                    TagInfo: '当前初始化过的tablet个数',
                    StatisticalMethod:
                      '数据来源 metrics:tablets_num_initialized',
                  },
                  {
                    TagName: 'TabletNotInitialized',
                    TagInfo: '当前未初始化过的tablet个数',
                    StatisticalMethod:
                      '数据来源 metrics:tablets_num_not_initialized',
                  },
                  {
                    TagName: 'TabletRunning',
                    TagInfo: '当前正在运行的tablet个数',
                    StatisticalMethod: '数据来源 metrics:tablets_num_running',
                  },
                  {
                    TagName: 'TabletShutdown',
                    TagInfo: '当前关闭的tablet个数',
                    StatisticalMethod: '数据来源 metrics:tablets_num_shutdown',
                  },
                  {
                    TagName: 'TabletStopped',
                    TagInfo: '当前停止的tablet个数',
                    StatisticalMethod: '数据来源 metrics:tablets_num_stopped',
                  },
                  {
                    TagName: 'TabletStopping',
                    TagInfo: '当前正在停止的tablet个数',
                    StatisticalMethod: '数据来源 metrics:tablets_num_stopping',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.TABLET.SESSION',
                Unit: '个',
                Desc: 'tablet session数',
                Tags: [
                  {
                    TagName: 'OpenClientSessions',
                    TagInfo: '此服务器上当前打开的tablet复制客户端session个数',
                    StatisticalMethod:
                      '数据来源 metrics:tablet_copy_open_client_sessions',
                  },
                  {
                    TagName: 'OpemSourceSessions',
                    TagInfo: '此服务器上当前打开的tablet复制源session个数',
                    StatisticalMethod:
                      '数据来源 metrics:tablet_copy_open_source_sessions',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '块管理器',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.BLOCK.MANAGER.BLOCK',
                Unit: '个',
                Desc: '块管理器block数',
                Tags: [
                  {
                    TagName: 'BlockUnderManagement',
                    TagInfo: '当前管理的数据块数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_blocks_under_management',
                  },
                  {
                    TagName: 'BlockOpenReading',
                    TagInfo: '当前打开供读取的数据块数',
                    StatisticalMethod:
                      '数据来源 metrics:block_manager_blocks_open_reading',
                  },
                  {
                    TagName: 'BlockOpenWriting',
                    TagInfo: '当前打开进行写入的数据块数',
                    StatisticalMethod:
                      '数据来源 metrics:block_manager_blocks_open_writing',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.BLOCK.MANAGER.BYTE',
                Unit: 'bytes',
                Desc: '块管理器字节数',
                Tags: [
                  {
                    TagName: 'BytesUnderManagement',
                    TagInfo: '当前管理的数据块字节数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_bytes_under_management',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.BLOCK.MANAGER.CONTAINER',
                Unit: '个',
                Desc: '块管理器容器数',
                Tags: [
                  {
                    TagName: 'ContainersUnderManagement',
                    TagInfo: '日志块容器数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_containers',
                  },
                  {
                    TagName: 'FullContainersUnderManagement',
                    TagInfo: '完整日志块容器数',
                    StatisticalMethod:
                      '数据来源 metrics:log_block_manager_full_containers',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '混合时钟',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.HYBRID.CLOCK.ERROR',
                Unit: '微秒',
                Desc: '混合时钟错误',
                Tags: [
                  {
                    TagName: 'HybridClockError',
                    TagInfo: '服务器时钟最大错误；无法读取基础时钟时返回2^64-1',
                    StatisticalMethod: '数据来源 metrics:hybrid_clock_error',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.HYBRID.CLOCK.TIMESTAMP',
                Unit: '微秒',
                Desc: '混合时钟时间戳',
                Tags: [
                  {
                    TagName: 'HybridClockTimestamp',
                    TagInfo: '混合时钟时间戳；无法读取基础时钟时返回2^64-1',
                    StatisticalMethod:
                      '数据来源 metrics:hybrid_clock_timestamp',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '缓存',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.BLOCK.CACHE.HIT',
                Unit: '次/秒',
                Desc: '块缓存命中',
                Tags: [
                  {
                    TagName: 'BlockCacheHit',
                    TagInfo:
                      '指标采集周期内平均每秒预期并命中块的查找数。当确定缓存的效率时，使用此值代替cache_hits',
                    StatisticalMethod:
                      '数据来源 metrics:block_cache_hits_caching/Duration',
                  },
                  {
                    TagName: 'BlockCacheMiss',
                    TagInfo:
                      '指标采集周期内平均每秒预期但未命中块的查找数。当确定缓存的效率时，使用此值代替cache_misses ',
                    StatisticalMethod:
                      '数据来源 metrics:block_cache_misses_caching/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.BLOCK.CACHE.USAGE',
                Unit: 'bytes',
                Desc: '块缓存使用率',
                Tags: [
                  {
                    TagName: 'BlockCacheUsage',
                    TagInfo: '块缓存占用的内存',
                    StatisticalMethod: '数据来源 metrics:block_cache_usage',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.FILE.CACHE.HIT',
                Unit: '次/秒',
                Desc: '文件缓存命中',
                Tags: [
                  {
                    TagName: 'FileCacheHit',
                    TagInfo:
                      '指标采集周期内平均每秒预期并命中文件描述符的查找数。当确定缓存的效率时，使用此值代替cache_hits',
                    StatisticalMethod:
                      '数据来源 metrics:file_cache_hits_caching/Duration',
                  },
                  {
                    TagName: 'FileCacheMiss',
                    TagInfo:
                      '指标采集周期内平均每秒预期但未命中文件描述符的查找数。当确定缓存的效率时，使用此值代替cache_misses ',
                    StatisticalMethod:
                      '数据来源 metrics:file_cache_misses_caching/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.FILE.CACHE.USAGE',
                Unit: '个',
                Desc: '文件缓存使用率',
                Tags: [
                  {
                    TagName: 'FileCacheUsage',
                    TagInfo: '文件缓存中的条目数',
                    StatisticalMethod: '数据来源 metrics:file_cache_usage',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.FLUSHRUNNING',
                Unit: 'count',
                Desc: '    缓存刷新',
                Tags: [
                  {
                    TagName: 'DeltaMemStore',
                    TagInfo: 'DeltaMemStore 刷新数量',
                    StatisticalMethod: '数据来源 metrics:flush_dms_running',
                  },
                  {
                    TagName: 'MemRowSet',
                    TagInfo: 'MemRowSet 刷新数量',
                    StatisticalMethod: '数据来源 metrics:flush_mrs_running',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.MEMROWSETSIZE',
                Unit: 'bytes',
                Desc: 'Mem Rowset',
                Tags: [
                  {
                    TagName: 'Total',
                    TagInfo: '节点已使用tablet’s memrowset 的大小',
                    StatisticalMethod: '数据来源 metrics:memrowset_size',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'KUDU.SERVER.ALLOCATED.BYTES',
                Unit: 'bytes',
                Desc: '分配的字节',
                Tags: [
                  {
                    TagName: 'AllocatedBytes',
                    TagInfo:
                      '应用程序使用的字节数。这通常与操作系统报告的内存使用情况不匹配，因为它不包括TCMalloc开销或内存碎片。',
                    StatisticalMethod:
                      '数据来源 metrics:generic_current_allocated_bytes',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.CONTEXT.SWITCH',
                Unit: '次/秒',
                Desc: '上下文',
                Tags: [
                  {
                    TagName: 'InvoluntarySwitches',
                    TagInfo: '指标采集周期内平均每秒非自发的上下文切换',
                    StatisticalMethod:
                      '数据来源 metrics:involuntary_context_switches/Duration',
                  },
                  {
                    TagName: 'voluntary_context_switches',
                    TagInfo: '指标采集周期内平均每秒自发的上下文切换',
                    StatisticalMethod:
                      '数据来源 metrics:voluntary_context_switches/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.CPU.TIME',
                Unit: '毫秒',
                Desc: 'Cpu时间',
                Tags: [
                  {
                    TagName: 'CpuStime',
                    TagInfo: '进程的总系统CPU时间',
                    StatisticalMethod: '数据来源 metrics:cpu_stime',
                  },
                  {
                    TagName: 'CpuUtime',
                    TagInfo: '进程的用户CPU总时间',
                    StatisticalMethod: '数据来源 metrics:cpu_utime',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.DATA.DIR',
                Unit: '个',
                Desc: '数据路径',
                Tags: [
                  {
                    TagName: 'DataDirsFailed',
                    TagInfo: '磁盘当前处于故障状态的数据目录数',
                    StatisticalMethod: '数据来源 metrics:data_dirs_failed',
                  },
                  {
                    TagName: 'DataDirsFull',
                    TagInfo: '磁盘当前已满的数据目录数',
                    StatisticalMethod: '数据来源 metrics:data_dirs_full',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.GLOG.MESSAGES',
                Unit: 'count/s',
                Desc: '日志信息',
                Tags: [
                  {
                    TagName: 'ErrorMessages',
                    TagInfo:
                      '指标采集周期内平均每秒应用程序发出的ERROR级日志消息数',
                    StatisticalMethod:
                      '数据来源 metrics:glog_error_messages/Duration',
                  },
                  {
                    TagName: 'WarningMessages',
                    TagInfo:
                      '指标采集周期内平均每秒应用程序发出的WARNING级日志消息数',
                    StatisticalMethod:
                      '数据来源 metrics:glog_warning_messages/Duration',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.OP.APPLY.QUEUE.LENGTH',
                Unit: '个',
                Desc: '队列中操作数',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '队列中最小等待任务数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '队列中最大等待任务数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '队列中平均等待任务数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '队列中等待任务数的99.9分位数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_length',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.OP.APPLY.QUEUE.TIME',
                Unit: '微秒',
                Desc: '排队等待时间',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小等待时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大等待时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均等待时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '等待时间的99.9分位数',
                    StatisticalMethod: '数据来源 metrics:op_apply_queue_time',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.OP.APPLY.RUN.TIME',
                Unit: '微秒',
                Desc: '操作运行时间',
                Tags: [
                  {
                    TagName: 'TotalCount',
                    TagInfo: '总操作数',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '最小运行时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '最大运行时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '平均运行时间',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                  {
                    TagName: 'Percentile_99_9',
                    TagInfo: '运行时间的99.9分位数',
                    StatisticalMethod: '数据来源 metrics:op_apply_run_time',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.SPINLOCK.CONTENTION.TIME',
                Unit: '微秒',
                Desc: '自旋锁',
                Tags: [
                  {
                    TagName: 'SpinlockContentionTime',
                    TagInfo: '自服务器启动后，内部自旋锁上的争用所消耗的时间量',
                    StatisticalMethod:
                      '数据来源 metrics:spinlock_contention_time',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.THREAD',
                Unit: '个',
                Desc: '线程',
                Tags: [
                  {
                    TagName: 'ThreadsRunning',
                    TagInfo: '当前正在运行的线程数',
                    StatisticalMethod: '数据来源 metrics:threads_running',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'Overview',
        Groups: [
          {
            Title: 'tablet',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.CLUSTER.REPLICA.SKEW.MAX',
                Unit: '个',
                Desc: 'tablet副本数差',
                Tags: [
                  {
                    TagName: 'ClusterReplicaSkew',
                    TagInfo:
                      '承载最多副本的tablet服务器上的副本数与承载最少副本的tablet服务器上的副本数之间的差异',
                    StatisticalMethod: '数据来源 metrics:cluster_replica_skew',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.TABLET.AGGR',
                Unit: '个',
                Desc: 'tablet数',
                Tags: [
                  {
                    TagName: 'TabletRunning',
                    TagInfo: '所有tablet server中当前正在运行的tablet总个数',
                    StatisticalMethod: '数据来源 metrics:tablets_num_running',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'KUDU.MASTER.LOG.MESSAGES.AGGR',
                Unit: 'count/s',
                Desc: 'master日志数',
                Tags: [
                  {
                    TagName: 'ErrorMessages',
                    TagInfo: '所有进程中发出的ERROR级日志消息数',
                    StatisticalMethod: '数据来源 metrics:glog_error_messages',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.SYS.CATALOG.OVERSIZED.WRITE.REQUESTS.MAX',
                Unit: 'count/s',
                Desc: '过大的写请求数',
                Tags: [
                  {
                    TagName: 'OversizedWriteRequests',
                    TagInfo:
                      '启动后master拒绝的对system catalog tablet的过大写请求数',
                    StatisticalMethod:
                      '数据来源 metrics:sys_catalog_oversized_write_requests',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.MASTER.THREAD.AGGR',
                Unit: '个',
                Desc: 'master线程数',
                Tags: [
                  {
                    TagName: 'ThreadsRunning',
                    TagInfo: '所有master中当前正在运行的线程数',
                    StatisticalMethod: '数据来源 metrics:threads_running',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.GLOG.MESSAGES.AGGR',
                Unit: 'count/s',
                Desc: 'tserver日志数',
                Tags: [
                  {
                    TagName: 'ErrorMessages',
                    TagInfo: '所有进程中发出的ERROR级日志消息数',
                    StatisticalMethod: '数据来源 metrics:glog_error_messages',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KUDU.SERVER.THREAD.AGGR',
                Unit: '个',
                Desc: 'tserver线程数',
                Tags: [
                  {
                    TagName: 'ThreadsRunning',
                    TagInfo: '所有tablet server中当前正在运行的线程数',
                    StatisticalMethod: '数据来源 metrics:threads_running',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'ALLUXIO',
    Namespace: [
      {
        Name: 'AlluxioMaster',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'ALLUXIO.MASTER.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.MASTER.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.MASTER.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.MASTER.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:non_heap_used，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:non_heap_committed，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_used，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_committed，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_max，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_init，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:non_heap_init，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'Master',
            MetricMetas: [
              {
                Name: 'ALLUXIO.MASTER.COMPLETE.FILE.OPS',
                Unit: '个',
                Desc: 'CompleteFile操作',
                Tags: [
                  {
                    TagName: 'CompleteFileOps',
                    TagInfo: 'CompleteFile操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.CompleteFileOps，表示CompleteFile操作总数',
                  },
                  {
                    TagName: 'FilesCompleted',
                    TagInfo: '成功的CompleteFile操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FilesCompleted，表示成功的CompleteFile操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.CREATE.DIRECTORY.OPS',
                Unit: '个',
                Desc: 'CreateDirectory操作',
                Tags: [
                  {
                    TagName: 'CreateDirectoryOps',
                    TagInfo: 'CreateDirectory操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.CreateDirectoryOps，表示CreateDirectoryOps操作总数',
                  },
                  {
                    TagName: 'DirectoriesCreated',
                    TagInfo: '成功的CreateDirectory操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.DirectoriesCreated，表示成功的CreateDirectory操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.CREATE.FILE.OPS',
                Unit: '个',
                Desc: 'CreateFile操作',
                Tags: [
                  {
                    TagName: 'CreateFileOps',
                    TagInfo: 'CreateFile操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.CreateFileOps，表示CreateFile操作总数',
                  },
                  {
                    TagName: 'FilesCreated',
                    TagInfo: '成功的CreateFile操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FilesCreated，表示成功的CreateFile操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.DELETE.PATH.OPS',
                Unit: '个',
                Desc: 'Delete操作',
                Tags: [
                  {
                    TagName: 'DeletePathOps',
                    TagInfo: 'Delete操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.DeletePathOps，表示Delete操作总数',
                  },
                  {
                    TagName: 'PathsDeleted',
                    TagInfo: '成功Delete操作的总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.PathsDeleted，表示成功Delete操作的总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.FILES.OPS',
                Unit: '个',
                Desc: '操作文件总数',
                Tags: [
                  {
                    TagName: 'FilesPersisted',
                    TagInfo: '成功保存的文件总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FilesPersisted，表示成功保存的文件总数',
                  },
                  {
                    TagName: 'FilesPinned',
                    TagInfo: '当前固定的文件总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FilesPinned，表示当前固定的文件总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.FREE.FILE.OPS',
                Unit: '个',
                Desc: 'FreeFile操作',
                Tags: [
                  {
                    TagName: 'FreeFileOps',
                    TagInfo: 'FreeFile操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FreeFileOps，表示FreeFile操作总数',
                  },
                  {
                    TagName: 'FilesFreed',
                    TagInfo: '成功的FreeFile操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FilesFreed，表示成功的FreeFile操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.GET.FILE.BLOCK.INFO.OPS',
                Unit: '个',
                Desc: 'GetFileBlockInfo操作',
                Tags: [
                  {
                    TagName: 'GetFileBlockInfoOps',
                    TagInfo: 'GetFileBlockInfo操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.GetFileBlockInfoOps，表示GetFileBlockInfo操作总数',
                  },
                  {
                    TagName: 'FileBlockInfosGot',
                    TagInfo: '成功的GetFileBlockInfo操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FileBlockInfosGot，表示成功的GetFileBlockInfo操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.GET.FILE.INFO.OPS',
                Unit: '个',
                Desc: 'GetFileInfo操作',
                Tags: [
                  {
                    TagName: 'GetFileInfoOps',
                    TagInfo: 'GetFileInfo操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.GetFileInfoOps，表示GetFileInfo操作总数',
                  },
                  {
                    TagName: 'FileInfosGot',
                    TagInfo: '成功的GetFileInfo操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.FileInfosGot，表示成功的GetFileInfo操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.GET.NEW.BLOCK.OPS',
                Unit: '个',
                Desc: 'GetNewBlock操作',
                Tags: [
                  {
                    TagName: 'GetNewBlockOps',
                    TagInfo: 'GetNewBlock操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.GetNewBlockOps，表示GetNewBlock操作总数',
                  },
                  {
                    TagName: 'NewBlocksGot',
                    TagInfo: '成功的GetNewBlock操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.NewBlocksGot，表示成功的GetNewBlock操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.MOUNT.OPS',
                Unit: '个',
                Desc: 'Mount操作',
                Tags: [
                  {
                    TagName: 'MountOps',
                    TagInfo: 'Mount操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.MountOps，表示Mount操作总数',
                  },
                  {
                    TagName: 'PathsMounted',
                    TagInfo: '成功Mount操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.PathsMounted，表示成功Mount操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.RENAME.PATH.OPS',
                Unit: '个',
                Desc: 'Rename操作',
                Tags: [
                  {
                    TagName: 'RenamePathOps',
                    TagInfo: 'Rename操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.RenamePathOps，表示Rename操作总数',
                  },
                  {
                    TagName: 'PathsRenamed',
                    TagInfo: '成功的Rename操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.PathsRenamed，表示成功的Rename操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.SET.ACL.OPS',
                Unit: '个',
                Desc: 'SetAcl操作',
                Tags: [
                  {
                    TagName: 'SetAclOps',
                    TagInfo: 'SetAcl操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.SetAclOps，表示SetAcl操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.SET.ATTRIBUTE.OPS',
                Unit: '个',
                Desc: 'SetAttribute操作',
                Tags: [
                  {
                    TagName: 'SetAttributeOps',
                    TagInfo: 'SetAttribute操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.SetAttributeOps，表示SetAttribute操作总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.TOTAL.PATHS',
                Unit: '个',
                Desc: '文件目录总数',
                Tags: [
                  {
                    TagName: 'TotalPaths',
                    TagInfo: 'Alluxio命名空间中的文件和目录总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.TotalPaths，表示Alluxio命名空间中的文件和目录总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.MASTER.UNMOUNT.OPS',
                Unit: '个',
                Desc: 'Unmount操作',
                Tags: [
                  {
                    TagName: 'UnmountOps',
                    TagInfo: 'Unmount操作总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.UnmountOps，表示Unmount操作总数',
                  },
                  {
                    TagName: 'PathsUnmounted',
                    TagInfo: '成功Unmount操作的总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Master.PathsUnmounted，表示成功Unmount操作的总数',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
      {
        Name: 'AlluxioWorker',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'ALLUXIO.WORKER.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.WORKER.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.WORKER.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.WORKER.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:non_heap_used，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:non_heap_committed，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_used，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_committed，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_max，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:heap_init，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:non_heap_init，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'Worker',
            MetricMetas: [
              {
                Name: 'ALLUXIO.WORKER.ASYNC.CACHE.BLOCKS',
                Unit: '个',
                Desc: 'async缓存块数量',
                Tags: [
                  {
                    TagName: 'AsyncCacheFailedBlocks',
                    TagInfo: 'worker async缓存失败的块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.AsyncCacheFailedBlocks，表示worker async缓存失败的块总数',
                  },
                  {
                    TagName: 'AsyncCacheRemoteBlocks',
                    TagInfo: '需要从远程源进行async缓存的块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.AsyncCacheRemoteBlocks，表示需要从远程源进行async缓存的块总数',
                  },
                  {
                    TagName: 'AsyncCacheSucceededBlocks',
                    TagInfo: 'worker async缓存成功的块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.AsyncCacheSucceededBlocks，表示worker async缓存成功的块总数',
                  },
                  {
                    TagName: 'AsyncCacheUfsBlocks',
                    TagInfo: '需要从本地源进行async缓存的数据块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.AsyncCacheUfsBlocks，表示需要从本地源进行async缓存的数据块总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.WORKER.ASYNC.CACHE.REQUESTS',
                Unit: '个',
                Desc: 'async缓存请求',
                Tags: [
                  {
                    TagName: 'AsyncCacheDuplicateRequests',
                    TagInfo: 'worker接收的重复async缓存请求总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.AsyncCacheDuplicateRequests，表示worker接收的重复async缓存请求总数',
                  },
                  {
                    TagName: 'AsyncCacheRequests',
                    TagInfo: 'worker接收的async缓存请求总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.AsyncCacheRequests，表示worker接收的async缓存请求总数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.WORKER.BLOCKS',
                Unit: '个',
                Desc: 'Blocks',
                Tags: [
                  {
                    TagName: 'BlocksAccessed',
                    TagInfo: '访问此worker中任何一个块的总次数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.BlocksAccessed，表示访问此worker中任何一个块的总次数',
                  },
                  {
                    TagName: 'BlocksCached',
                    TagInfo: '在worker中用于缓存数据的块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.BlocksCached，表示在worker中用于缓存数据的块总数',
                  },
                  {
                    TagName: 'BlocksCancelled',
                    TagInfo: 'worker中中止的临时块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.BlocksCancelled，表示worker中中止的临时块总数',
                  },
                  {
                    TagName: 'BlocksDeleted',
                    TagInfo: '按外部请求列出的此worker中已删除的块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.BlocksDeleted，表示按外部请求列出的此worker中已删除的块总数',
                  },
                  {
                    TagName: 'BlocksEvicted',
                    TagInfo: 'worker中逐出的块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.BlocksEvicted，表示worker中逐出的块总数',
                  },
                  {
                    TagName: 'BlocksLost',
                    TagInfo: 'worker中丢失的数据块总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.BlocksLost，表示worker中丢失的数据块总数',
                  },
                  {
                    TagName: 'BlocksPromoted',
                    TagInfo: 'worker中的任何一个数据块移动到新层的总次数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.BlocksPromoted，表示worker中的任何一个数据块移动到新层的总次数',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'ALLUXIO.WORKER.CAPACITY',
                Unit: 'bytes',
                Desc: 'worker的层上容量',
                Tags: [
                  {
                    TagName: 'CapacityFree',
                    TagInfo: 'worker的所有层上的总可用字节',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.CapacityFree，表示worker的所有层上的总可用字节',
                  },
                  {
                    TagName: 'CapacityTotal',
                    TagInfo: 'worker的所有层上的总容量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.CapacityTotal，表示worker的所有层上的总容量',
                  },
                  {
                    TagName: 'CapacityUsed',
                    TagInfo: 'worker的所有层上的已用字节总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Worker.CapacityUsed，表示worker的所有层上的已用字节总数',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
      {
        Name: 'Overview',
        Groups: [
          {
            Title: 'Cluster',
            MetricMetas: [
              {
                Name: 'ALLUXIO.CLUSTER.BYTES',
                Unit: 'bytes',
                Desc: '数据读写总量',
                Tags: [
                  {
                    TagName: 'BytesReadAlluxio',
                    TagInfo: '所有worker上报的从Alluxio存储读取的总字节数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesReadAlluxio，表示所有worker上报的从Alluxio存储读取的总字节数',
                  },
                  {
                    TagName: 'BytesReadUfsAll',
                    TagInfo: '所有worker从所有 Alluxio UFSes读取的字节总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesReadUfsAll，表示所有worker从所有 Alluxio UFSes读取的字节总数',
                  },
                  {
                    TagName: 'BytesWrittenAlluxio',
                    TagInfo: '写入所有worker的Alluxio存储的总字节数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesWrittenAlluxio，表示写入所有worker的Alluxio存储的总字节数',
                  },
                  {
                    TagName: 'BytesWrittenUfsAll',
                    TagInfo: '所有worker写入所有Alluxio UFSes的总字节数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesWrittenUfsAll，表示所有worker写入所有Alluxio UFSes的总字节数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.CLUSTER.BYTES.THROUGHPUT',
                Unit: 'bytes',
                Desc: '数据读写吞吐量',
                Tags: [
                  {
                    TagName: 'BytesReadAlluxioThroughput',
                    TagInfo: '所有worker从Alluxio存储读取数据的吞吐量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesReadAlluxioThroughput，表示所有worker从Alluxio存储读取数据的吞吐量',
                  },
                  {
                    TagName: 'BytesReadUfsThroughput',
                    TagInfo: '所有worker从所有Alluxio ufse读取的吞吐量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesReadUfsThroughput，表示所有worker从所有Alluxio ufse读取的吞吐量',
                  },
                  {
                    TagName: 'BytesWrittenAlluxioThroughput',
                    TagInfo: '所有worker写入Alluxio存储的吞吐量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesWrittenAlluxioThroughput，表示所有worker写入Alluxio存储的吞吐量',
                  },
                  {
                    TagName: 'BytesWrittenUfsThroughput',
                    TagInfo: '所有worker写入所有Alluxio UFSes的吞吐量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.BytesWrittenUfsThroughput，表示所有worker写入所有Alluxio UFSes的吞吐量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.CLUSTER.CAPACITY',
                Unit: 'bytes',
                Desc: 'worker的层上容量',
                Tags: [
                  {
                    TagName: 'CapacityFree',
                    TagInfo: '所有worker的所有层上的总可用字节',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.CapacityFree，表示所有worker的所有层上的总可用字节',
                  },
                  {
                    TagName: 'CapacityTotal',
                    TagInfo: '所有worker的所有层上的总容量',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.CapacityTotal，表示所有worker的所有层上的总容量',
                  },
                  {
                    TagName: 'CapacityUsed',
                    TagInfo: '所有worker的所有层上的已用字节总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.CapacityUsed，表示所有worker的所有层上的已用字节总数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ALLUXIO.CLUSTER.WORKERS',
                Unit: '个',
                Desc: 'worker总数',
                Tags: [
                  {
                    TagName: 'Workers',
                    TagInfo: '群集中的active worker总数',
                    StatisticalMethod:
                      '数据来源 endpoint/metrics/prometheus/:Cluster.Workers，表示群集中的active worker总数',
                  },
                ],
                Selected: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'IMPALA',
    Namespace: [
      {
        Name: 'Impala-Catalog',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'IMPALA.CATALOG.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.CATALOG.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'TCMALLOC',
            MetricMetas: [
              {
                Name: 'IMPALA.CATALOG.TCMALLOC',
                Unit: 'Bytes',
                Desc: 'TCMALLOC内存',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '程序使用的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_bytes_in_use ，表示应用程序使用的字节数。这通常与操作系统报告的内存使用情况不匹配，因为它不包括 TCMalloc 开销或内存碎片',
                  },
                  {
                    TagName: 'PageheapFreeBytes',
                    TagInfo: '页堆中空闲映射页的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_pageheap_free_bytes ,表示页堆中空闲映射页的字节数。这些字节可用于完成分配请求。它们总是计入虚拟内存使用量，除非底层内存被操作系统换出，否则它们也计入物理内存使用量。',
                  },
                  {
                    TagName: 'PageheapUnmappedBytes',
                    TagInfo: '页堆中空闲、未映射页的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_pageheap_unmapped_bytes,表示页堆中空闲、未映射页的字节数。这些是已释放回操作系统的字节，可能是由 Release调用之一释放的。它们可用于满足分配请求，但通常会导致页面错误。它们总是计入虚拟内存使用量，并且取决于操作系统，通常不计入物理内存使用量',
                  },
                  {
                    TagName: 'PhysicalBytesReserved',
                    TagInfo: '计算进程使用的物理内存量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_physical_bytes_reserved,表示计算进程使用的物理内存量（以字节为单位）的派生度量，包括实际使用的内存和 tcmalloc 保留的空闲字节,不包括 tcmalloc 元数据.',
                  },
                  {
                    TagName: 'TotalBytesReserved',
                    TagInfo: 'TCMalloc保留的系统内存字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_total_bytes_reserved ,表示TCMalloc 保留的系统内存字节数.',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'IMPALA.CATALOG',
                Unit: 'Bytes',
                Desc: '常驻内存集',
                Tags: [
                  {
                    TagName: 'RSS',
                    TagInfo: '常驻内存集',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_memory_mapped_bytes ,表示常驻内存集',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.CATALOG.HEARTBEAT_INTERVAL_TIME',
                Unit: 's',
                Desc: '守护进程到StateStore的心跳间隔',
                Tags: [
                  {
                    TagName: 'Last',
                    TagInfo: '守护进程到StateStore的最近心跳间隔',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_statestore_subscriber_heartbeat_interval_time The time (sec) between Statestore heartbeats ，守护进程到StateStore的最近心跳间隔',
                  },
                  {
                    TagName: 'Max',
                    TagInfo: '守护进程到StateStore的最大心跳间隔',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_statestore_subscriber_heartbeat_interval_time The time (sec) between Statestore heartbeats ,守护进程到StateStore的最大心跳间隔',
                  },
                  {
                    TagName: 'Mean',
                    TagInfo: '守护进程到StateStore的平均心跳间隔',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_statestore_subscriber_heartbeat_interval_time The time (sec) between Statestore heartbeats ，守护进程到StateStore的平均心跳间隔',
                  },
                  {
                    TagName: 'Min',
                    TagInfo: '守护进程到StateStore的最小心跳间隔',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_statestore_subscriber_heartbeat_interval_time The time (sec) between Statestore heartbeats ，守护进程到StateStore的最小心跳间隔',
                  },
                  {
                    TagName: 'Stddev',
                    TagInfo: '守护进程到StateStore的心跳之间的标准偏差',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_statestore_subscriber_heartbeat_interval_time The time (sec) between Statestore heartbeats ，守护进程到StateStore的心跳之间的标准偏差',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.CATALOG.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.CATALOG.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'IMPALA.CATALOG.THREAD.COUNT',
                Unit: '个',
                Desc: '线程数',
                Tags: [
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:ThreadCount，表示线程数量',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:DaemonThreadCount，表示后台线程数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.CATALOG.THRIFT_SERVER_CONNECTIONS',
                Unit: '个',
                Desc: '活跃连接数',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '活跃连接数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thrift_server_CatalogService_connections_in_use,表示活动连接数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'Impala-Daemon',
        Groups: [
          {
            Title: 'Catalog',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.CATALOG1',
                Unit: '个',
                Desc: 'Catalog tables数量',
                Tags: [
                  {
                    TagName: 'NumTables',
                    TagInfo: 'catalog中的表数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_catalog_num_tables,catalog中的表数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.CATALOG2',
                Unit: '个',
                Desc: 'Catalog databases数量',
                Tags: [
                  {
                    TagName: 'NumDatabases',
                    TagInfo: 'catalog的数据库数量',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_catalog_num_databases,catalog的数据库数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'IO管理器',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.SERVER.IO.MGR2',
                Unit: 'Bytes',
                Desc: 'IO管理器写入磁盘字节数',
                Tags: [
                  {
                    TagName: 'BytesWritten',
                    TagInfo: 'IO 管理器写入磁盘的总字节数。',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_io_mgr_bytes_written,number of bytes used by the application.IO 管理器写入磁盘的总字节数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER.IO.MGR3',
                Unit: '个',
                Desc: 'IO管理器打开文件数',
                Tags: [
                  {
                    TagName: 'NumOpenFiles',
                    TagInfo: '当前 IO 管理器打开的文件数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_io_mgr_num_open_files,number of bytes used by the application.当前 IO 管理器打开的文件数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER.IO.MGR5',
                Unit: 'Bytes',
                Desc: '读取的本地字节数',
                Tags: [
                  {
                    TagName: 'LocalBytesRead',
                    TagInfo: 'IO 管理器读取的本地字节总数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_io_mgr_local_bytes_read,IO 管理器读取的本地字节总数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SRV.IO.MGR',
                Unit: '个',
                Desc: '使用的HDFS文件句柄数',
                Tags: [
                  {
                    TagName: 'NumFileHandlesOutstanding',
                    TagInfo: 'readers当前正在使用的 HDFS 文件句柄数。.',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_io_mgr_num_file_handles_outstanding,number of bytes used by the application.readers当前正在使用的 HDFS 文件句柄数',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: 'TCMALLOC',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.TCMALLOC',
                Unit: 'Bytes',
                Desc: 'TCMALLOC内存',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '程序使用的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_bytes_in_use ，表示应用程序使用的字节数。这通常与操作系统报告的内存使用情况不匹配，因为它不包括 TCMalloc 开销或内存碎片',
                  },
                  {
                    TagName: 'PageheapFreeBytes',
                    TagInfo: '页堆中空闲映射页的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_pageheap_free_bytes ,表示页堆中空闲映射页的字节数。这些字节可用于完成分配请求。它们总是计入虚拟内存使用量，除非底层内存被操作系统换出，否则它们也计入物理内存使用量。',
                  },
                  {
                    TagName: 'PageheapUnmappedBytes',
                    TagInfo: '页堆中空闲、未映射页的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_pageheap_unmapped_bytes,表示页堆中空闲、未映射页的字节数。这些是已释放回操作系统的字节，可能是由 Release调用之一释放的。它们可用于满足分配请求，但通常会导致页面错误。它们总是计入虚拟内存使用量，并且取决于操作系统，通常不计入物理内存使用量',
                  },
                  {
                    TagName: 'PhysicalBytesReserved',
                    TagInfo: '计算进程使用的物理内存量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_physical_bytes_reserved,表示计算进程使用的物理内存量（以字节为单位）的派生度量，包括实际使用的内存和 tcmalloc 保留的空闲字节,不包括 tcmalloc 元数据.',
                  },
                  {
                    TagName: 'TotalBytesReserved',
                    TagInfo: 'TCMalloc保留的系统内存字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_total_bytes_reserved ,表示TCMalloc 保留的系统内存字节数.',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '内存管理器',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.MEM.TR.CSRV',
                Unit: 'Bytes',
                Desc: 'ControlService:使用字节数',
                Tags: [
                  {
                    TagName: 'PeakUsageBytes',
                    TagInfo: 'Memtracker ControlService 峰值使用字节数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_mem_tracker_ControlService_peak_usage_bytes,Memtracker ControlService 峰值使用字节数',
                  },
                  {
                    TagName: 'CurrentUsageBytes',
                    TagInfo: 'Memtracker ControlService 当前使用字节数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_mem_tracker_ControlService_current_usage_bytes,Memtracker ControlService 当前使用字节数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.MEM.TR.DSSRV',
                Unit: 'Bytes',
                Desc: 'DataStreamService:使用字节数',
                Tags: [
                  {
                    TagName: 'PeakUsageBytes',
                    TagInfo: 'Memtracker DataStreamService 峰值使用字节数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_mem_tracker_DataStreamService_peak_usage_bytes,Memtracker DataStreamService 峰值使用字节数',
                  },
                  {
                    TagName: 'CurrentUsageBytes',
                    TagInfo: 'Memtracker DataStreamService 当前使用字节数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_mem_tracker_DataStreamService_current_usage_bytes,Memtracker DataStreamService 当前使用字节数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.MEM.TRACKER.PROCESS.BYTES',
                Unit: 'Bytes',
                Desc: '超过其内存限制的内存量(默认值-1)',
                Tags: [
                  {
                    TagName: 'OverLimit',
                    TagInfo:
                      '上次遇到内存限制时进程超过其内存限制的内存量(默认值为-1)',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_mem_tracker_process_bytes_over_limit,程序超过内存管理器限制时内存.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.MEM.TRACKER.PROCESS1',
                Unit: 'Bytes',
                Desc: '内存限制',
                Tags: [
                  {
                    TagName: 'Limit',
                    TagInfo: '进程内存管理器阈值',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_mem_tracker_process_limit,进程内存管理器阈值.',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '服务',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.SERVER.QUERY.DURATIONS.MS',
                Unit: 'ms',
                Desc: '查询延迟发布',
                Tags: [
                  {
                    TagName: 'Quantile_0.2',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_server_query_durations_ms{quantile=0.2},查询延迟的分布',
                  },
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_server_query_durations_ms{quantile=0.5},查询延迟的分布',
                  },
                  {
                    TagName: 'Quantile_0.7',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      '数据来源于 impala_server_query_durations_ms{quantile=0.7},查询延迟的分布',
                  },
                  {
                    TagName: 'Quantile_0.9',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_server_query_durations_ms{quantile=0.9},查询延迟的分布',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      'metrics_prometheus: impala_server_query_durations_ms{quantile=0.95},查询延迟的分布',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_server_query_durations_ms{quantile=0.999},查询延迟的分布',
                  },
                  {
                    TagName: 'Count',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_server_query_durations_ms{quantile=0.95},查询延迟的分布',
                  },
                  {
                    TagName: 'Sum',
                    TagInfo: '查询延迟的分布',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_server_query_durations_ms{quantile=0.999},查询延迟的分布',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER1',
                Unit: '个',
                Desc: '打开HDFS文件数',
                Tags: [
                  {
                    TagName: 'NumFilesOpenForInsert',
                    TagInfo: '当前打开以进行写入的 HDFS 文件数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_files_open_for_insert,当前打开以进行写入的 HDFS 文件数。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER10',
                Unit: '个',
                Desc: '非活动状态而终止会话数',
                Tags: [
                  {
                    TagName: 'NumSessionsExpired',
                    TagInfo: '由于非活动状态而过期的会话数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_sessions_expired,由于不活动而过期的会话数。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER11',
                Unit: '个',
                Desc: '非活动状态而终止查询数',
                Tags: [
                  {
                    TagName: 'NumQueriesExpired',
                    TagInfo: '由于非活动状态而过期的查询数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_queries_expired,由于非活动状态而过期的查询数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER12',
                Unit: '个',
                Desc: '打开HS2 会话数',
                Tags: [
                  {
                    TagName: 'NumOpenHS2Sessions',
                    TagInfo: '打开的 HiveServer2 会话数。',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_open_hiveserver2_sessions,打开的 HiveServer2 会话数。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER14',
                Unit: '个',
                Desc: 'Hedged reads尝试次数',
                Tags: [
                  {
                    TagName: 'HedgedReadOps',
                    TagInfo: '在进程生命周期内hedged reads尝试总数.',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_hedged_read_ops,在进程生命周期内hedged reads尝试总数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER2',
                Unit: '个',
                Desc: '进程生命周期内读取扫描范围',
                Tags: [
                  {
                    TagName: 'ScanRangesTotal',
                    TagInfo: '在进程生命周期内读取的扫描范围总数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_scan_ranges_total,在进程生命周期内读取的扫描范围总数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER3',
                Unit: '个',
                Desc: '打开Beeswax会话数量',
                Tags: [
                  {
                    TagName: 'NumOpenBeeswaxSessions',
                    TagInfo: '打开Beeswax会话数量',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_open_beeswax_sessions,打开Beeswax会话数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER4',
                Unit: '个',
                Desc: '进程生命周期内处理查询fragment总数',
                Tags: [
                  {
                    TagName: 'NumFragments',
                    TagInfo: '在进程生命周期内处理的查询fragment总数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_fragments,在进程生命周期内处理的查询fragment总数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER5',
                Unit: '个',
                Desc: '在进程生命周期内处理查询总数',
                Tags: [
                  {
                    TagName: 'NumQueries',
                    TagInfo: '在进程生命周期内处理的查询总数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_queries,在进程生命周期内处理的查询总数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER6',
                Unit: '个',
                Desc: '缓存已支持HS2 FETCH_FIRST总行数',
                Tags: [
                  {
                    TagName: 'ResultSetCacheTotalNumRows',
                    TagInfo: '缓存以支持 HS2 FETCH_FIRST 的总行数.',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_resultset_cache_total_num_rows,缓存以支持 HS2 FETCH_FIRST 的总行数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER8',
                Unit: '个',
                Desc: '此Impala服务器上注册查询总数',
                Tags: [
                  {
                    TagName: 'NumQueriesRegistered',
                    TagInfo:
                      '在此 Impala 服务器实例上注册的查询总数。 包括正在运行和等待关闭的查询',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_num_queries_registered,在此 Impala 服务器实例上注册的查询总数。 包括正在运行和等待关闭的查询',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER9',
                Unit: '个',
                Desc: 'be查询总数',
                Tags: [
                  {
                    TagName: 'NumQueriesExecuted',
                    TagInfo: '在进程生命周期内在此be执行的查询总数。',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_server_backend_num_queries_executed,在进程生命周期内在此be执行的查询总数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SRV',
                Unit: '个',
                Desc: '在无volum元数据的进程生命周期内读取的扫描范围总数',
                Tags: [
                  {
                    TagName: 'ScanRangesNumMissingVolumId',
                    TagInfo:
                      '在没有volume 元数据的进程生命周期内读取的扫描范围总数',
                    StatisticalMethod:
                      '数据来源于  metrics_prometheus:impala_server_scan_ranges_num_missing_volume_id，在没有volume 元数据的进程生命周期内读取的扫描范围总数.',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.BEESWAX_FRONTEND',
                Unit: '个',
                Desc: 'Beeswax API客户端连接数',
                Tags: [
                  {
                    TagName: 'TotalConn',
                    TagInfo: '表示与此 Impala Daemon的活跃Beeswax API 连接总数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thrift_server_beeswax_frontend_total_connections,表示与此 Impala Daemon的活跃Beeswax API 连接总数',
                  },
                  {
                    TagName: 'ConnSetupQueueSize',
                    TagInfo:
                      '此Impala Daemon已被接收并等待建立连接的Beeswax API连接数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thrift_server_beeswax_frontend_connection_setup_queue_size,此Impala Daemon已被接收并等待建立连接的Beeswax API连接数.',
                  },
                  {
                    TagName: 'Conn_In_Use',
                    TagInfo: '表示与此 Impala Daemon的活跃Beeswax API 连接数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thrift_server_beeswax_frontend_connections_in_use.此Impala Daemon的活跃Beeswax API连接数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.BEESWAX.FR.SVC.TH.WAIT.TIME',
                Unit: 'us',
                Desc: 'Beeswax API客户端等待服务线程建立时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.2',
                    TagInfo: 'Beeswax API 客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_beeswax_frontend_svc_thread_wait_time{quantile=0.2},Beeswax API 客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'Beeswax API 客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_beeswax_frontend_svc_thread_wait_time{quantile=0.5},Beeswax API 客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.7',
                    TagInfo: 'Beeswax API 客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 impala_thrift_server_beeswax_frontend_svc_thread_wait_time{quantile=0.7},Beeswax API 客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.9',
                    TagInfo: 'Beeswax API 客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_beeswax_frontend_svc_thread_wait_time{quantile=0.9},Beeswax API 客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'Beeswax API 客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_beeswax_frontend_svc_thread_wait_time{quantile=0.95},Beeswax API 客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'Beeswax API 客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_beeswax_frontend_svc_thread_wait_time{quantile=0.999},Beeswax API 客户端等待服务线程所花费的时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.BEESWAX.FRONTED',
                Unit: '个',
                Desc: '已超时的Beeswax API连接数',
                Tags: [
                  {
                    TagName: 'TimeOutCnncRequests',
                    TagInfo: '与Impala Daemon建立连接已超时的Beeswax API连接数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_thrift_server_beeswax_frontend_timedout_cnxn_requests,与Impala Daemon建立连接已超时的Beeswax API连接数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.CLUSTER.MEMBERSHIP.BACKENDS',
                Unit: '个',
                Desc: 'StateStore中注册后端总数',
                Tags: [
                  {
                    TagName: 'Total',
                    TagInfo: ' 在 statestore 中注册的后端总数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_cluster_membership_backends_total,在 statestore 中注册的后端总数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.EX.DS.CLASS.CH',
                Unit: '个',
                Desc: '外部数据源缓存类中缓存未命中数',
                Tags: [
                  {
                    TagName: 'Misses',
                    TagInfo: '外部数据源缓存类中的未命中缓存数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_external_data_source_class_cache_misses,外部数据源缓存类中的未命中缓存数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.H2_FRONTEND',
                Unit: '个',
                Desc: 'HS2 API客户端连接数',
                Tags: [
                  {
                    TagName: 'TotalConn',
                    TagInfo:
                      '此Impala Daemon在生命周期内建立连接的HiveServer2 API连接数.',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_thrift_server_hiveserver2_frontend_total_connections,此Impala Daemon在生命周期内建立连接的HiveServer2 API连接数',
                  },
                  {
                    TagName: 'ConnSetupQueueSize',
                    TagInfo:
                      '此Impala Daemon已被接收并等待建立连接的HiveServer2 API连接数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_thrift_server_hiveserver2_frontend_connection_setup_queue_size,此Impala Daemon已被接收并等待建立连接的HiveServer2 API连接数',
                  },
                  {
                    TagName: 'Conn_In_Use',
                    TagInfo: '此Impala Daemon的活跃HiveServer2 API连接数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_thrift_server_hiveserver2_frontend_connections_in_use,此Impala Daemon的活跃HiveServer2 API连接数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.H2.FR.CONN.SETUP.TIME',
                Unit: 'us',
                Desc: 'HS2 API客户端等待建立连接时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.2',
                    TagInfo: 'HiveServer2 API 客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:  impala_thrift_server_hiveserver2_frontend_connection_setup_time{quantile=0.2},HiveServer2 API 客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'HiveServer2 API 客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      'metrics_prometheus:  impala_thrift_server_hiveserver2_frontend_connection_setup_time{quantile=0.5},HiveServer2 API 客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.7',
                    TagInfo: 'HiveServer2 API 客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '  impala_thrift_server_hiveserver2_frontend_connection_setup_time{quantile=0.7},HiveServer2 API 客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.9',
                    TagInfo: 'HiveServer2 API 客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:  impala_thrift_server_hiveserver2_frontend_connection_setup_time{quantile=0.9},HiveServer2 API 客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'HiveServer2 API 客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      'metrics_prometheus:  impala_thrift_server_hiveserver2_frontend_connection_setup_time{quantile=0.95},HiveServer2 API 客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'HiveServer2 API 客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:  impala_thrift_server_hiveserver2_frontend_connection_setup_time{quantile=0.999},HiveServer2 API 客户端等待连接建立所花费的时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.H2.FR.SVC.TH.WAIT.TIME',
                Unit: 'us',
                Desc: 'HS2 API客户端等待服务线程建立时间\n',
                Tags: [
                  {
                    TagName: 'Quantile_0.2',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time{quantile=0.2},HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time{quantile=0.5},HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.7',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time{quantile=0.7},HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.9',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time{quantile=0.9},HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time{quantile=0.95},HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time{quantile=0.999},HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Count',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time_count,HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Sum',
                    TagInfo: 'HiveServer2 API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_frontend_svc_thread_wait_time_sum,HiveServer2 API 的客户端等待服务线程所花费的时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.H2.HTTP.FR.SVC.TH.WAIT.TIME',
                Unit: 'us',
                Desc: 'HS2 HTTP API客户端等待服务线程时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.2',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time{quantile=0.2},HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time{quantile=0.5},HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.7',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time{quantile=0.7},HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.9',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time{quantile=0.9},HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time{quantile=0.95},HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time{quantile=0.999},HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Count',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      'metrics_prometheus: impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time_count,HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Sum',
                    TagInfo:
                      'HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_hiveserver2_http_frontend_svc_thread_wait_time_sum,HiveServer2 HTTP API 的客户端等待服务线程所花费的时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.MEMORY',
                Unit: 'Bytes',
                Desc: '此进程的驻留集大小（RSS)',
                Tags: [
                  {
                    TagName: 'RSS',
                    TagInfo:
                      '此进程的驻留集大小（RSS），包括 TCMalloc、缓冲池和 Jvm',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:impala_memory_rss,此进程的驻留集大小（RSS），包括 TCMalloc、缓冲池和 Jvm',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.REQUEST.POOL.SERVICE.RESOLVE',
                Unit: 'ms',
                Desc: '解析请求池请求所花费时间(毫秒)',
                Tags: [
                  {
                    TagName: 'Total',
                    TagInfo: '解析请求池请求所花费时间(毫秒)',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_request_pool_service_resolve_pool_duration_ms_total,解析请求池请求所花费时间(毫秒).',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.RPC.CSRV',
                Unit: '个',
                Desc: 'ControlService:服务队列溢被拒绝数',
                Tags: [
                  {
                    TagName: 'RpcsQueueOverflow',
                    TagInfo:
                      'impala.ControlService服务：由于服务队列溢出而被拒绝的 RPC 数量',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_rpc_impala_ControlService_rpcs_queue_overflow,impala.ControlService服务：由于服务队列溢出而被拒绝的 RPC 数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.RPC.DSSRV',
                Unit: '个',
                Desc: 'DataStreamService:服务队列溢被拒绝数',
                Tags: [
                  {
                    TagName: 'RpcsQueueOverflow',
                    TagInfo:
                      'DataStreamService: impala.DataStreamService服务：由于服务队列溢出而被拒绝的 RPC 数量',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_rpc_impala_DataStreamService_rpcs_queue_overflow,impala.DataStreamService服务：由于服务队列溢出而被拒绝的 RPC 数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER.BA.CONN.SETUP.TIME',
                Unit: 'us',
                Desc: 'Impala be的客户端等待连接建立所花费的时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.2',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_connection_setup_time{quantile=0.2},Impala be的客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_backend_connection_setup_time{quantile=0.5},Impala be的客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.7',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于impala_thrift_server_backend_connection_setup_time{quantile=0.7},Impala be的客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.9',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_connection_setup_time{quantile=0.9},Impala be的客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_backend_connection_setup_time{quantile=0.95},Impala be的客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_connection_setup_time{quantile=0.999},Impala be的客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Count',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_backend_connection_setup_time_count,Impala be的客户端等待连接建立所花费的时间',
                  },
                  {
                    TagName: 'Sum',
                    TagInfo: 'Impala be的客户端等待连接建立所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_connection_setup_time_sum,Impala be的客户端等待连接建立所花费的时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER.BA.SVC.TH.WAIT.TIME',
                Unit: 'us',
                Desc: 'Impala be 的客户端等待服务线程所花费的时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.2',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_svc_thread_wait_time{quantile=0.2},Impala be 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_backend_svc_thread_wait_time{quantile=0.5},Impala be 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.7',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      ' 数据来源于impala_thrift_server_backend_svc_thread_wait_time{quantile=0.7},Impala be 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.9',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_svc_thread_wait_time{quantile=0.9},Impala be 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_backend_svc_thread_wait_time{quantile=0.95},Impala be 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_svc_thread_wait_time{quantile=0.999},Impala be 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Count',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: impala_thrift_server_backend_svc_thread_wait_time_count,Impala be 的客户端等待服务线程所花费的时间',
                  },
                  {
                    TagName: 'Sum',
                    TagInfo: 'Impala be 的客户端等待服务线程所花费的时间',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: impala_thrift_server_backend_svc_thread_wait_time_sum,Impala be 的客户端等待服务线程所花费的时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER.BACKEND',
                Unit: '个',
                Desc: '已超时等待设置的 Impala 后端服务器的连接请求数',
                Tags: [
                  {
                    TagName: 'ConnSetupQueueSize',
                    TagInfo: '已超时等待设置的 Impala 后端服务器的连接请求数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_thrift_server_backend_connection_setup_queue_size, 已超时等待设置的 Impala 后端服务器的连接请求数.',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER.BACKEND1',
                Unit: '个',
                Desc: '已超时等待设置的 Impala be 的连接请求数',
                Tags: [
                  {
                    TagName: 'TimeOutCnncRequests',
                    TagInfo: '已超时等待设置的 Impala be 的连接请求数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_thrift_server_backend_timedout_cnxn_requests, 已超时等待设置的 Impala be 的连接请求数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.SERVER.BACKEND2',
                Unit: '个',
                Desc: '与此 Impala 守护程序建立的 Impala 后端客户端连接总数',
                Tags: [
                  {
                    TagName: 'TotalConnections',
                    TagInfo:
                      '在此 Impala damon的生命周期内，与此 Impala 守护程序建立的 Impala 后端客户端连接总数。',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:impala_thrift_server_backend_total_connections, 在此 Impala damon的生命周期内，与此 Impala 守护程序建立的 Impala 后端客户端连接总数。',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.DAEMON.THREAD.COUNT',
                Unit: '个',
                Desc: '线程数',
                Tags: [
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:ThreadCount，表示线程数量',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:DaemonThreadCount，表示后台线程数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程管理器',
            MetricMetas: [
              {
                Name: 'IMPALA.DAEMON.THREAD.MANAGER',
                Unit: '个',
                Desc: '线程数量',
                Tags: [
                  {
                    TagName: 'RunningThreads',
                    TagInfo: '运行中线程数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thread_manager_running_threads，运行中线程数',
                  },
                  {
                    TagName: 'TotalCreatedThreads',
                    TagInfo: '进程生命周期内创建的线程数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thread_manager_total_threads_created,进程生命周期内创建的线程数.',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'Impala-Statestore',
        Groups: [
          {
            Title: 'TCMALLOC',
            MetricMetas: [
              {
                Name: 'IMPALA.STATESTORE.TCMALLOC',
                Unit: 'Bytes',
                Desc: 'TCMALLOC内存',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '程序使用的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_bytes_in_use ，表示应用程序使用的字节数。这通常与操作系统报告的内存使用情况不匹配，因为它不包括 TCMalloc 开销或内存碎片',
                  },
                  {
                    TagName: 'PageheapFreeBytes',
                    TagInfo: '页堆中空闲映射页的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_pageheap_free_bytes ,表示页堆中空闲映射页的字节数。这些字节可用于完成分配请求。它们总是计入虚拟内存使用量，除非底层内存被操作系统换出，否则它们也计入物理内存使用量。',
                  },
                  {
                    TagName: 'PageheapUnmappedBytes',
                    TagInfo: '页堆中空闲、未映射页的字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_pageheap_unmapped_bytes,表示页堆中空闲、未映射页的字节数。这些是已释放回操作系统的字节，可能是由 Release 调用之一释放的。它们可用于满足分配请求，但通常会导致页面错误。它们总是计入虚拟内存使用量，并且取决于操作系统，通常不计入物理内存使用量',
                  },
                  {
                    TagName: 'PhysicalBytesReserved',
                    TagInfo: '计算进程使用的物理内存量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_physical_bytes_reserved,表示计算进程使用的物理内存量（以字节为单位）的派生度量，包括实际使用的内存和 tcmalloc 保留的空闲字节,不包括 tcmalloc 元数据.',
                  },
                  {
                    TagName: 'TotalBytesReserved',
                    TagInfo: 'TCMalloc保留的系统内存字节数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_tcmalloc_total_bytes_reserved ,表示TCMalloc 保留的系统内存字节数.',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'IMPALA.STATESTORE',
                Unit: 'Bytes',
                Desc: '常驻内存集',
                Tags: [
                  {
                    TagName: 'RSS',
                    TagInfo: '常驻内存集',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_memory_mapped_bytes ,表示常驻内存集',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.STATESTORE.RUNNING_THREADS',
                Unit: '个',
                Desc: '运行线程数',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '运行线程数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thread_manager_running_threads,表示正在运行中的线程数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.STATESTORE.STATESTORE_LIVE_BACKENDS',
                Unit: '个',
                Desc: 'StateStore订阅者数量',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: 'StateStore订阅者数量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_statestore_live_backends,表示Statestore订阅者数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'IMPALA.STATESTORE.THRIFT_SERVER_CONNECTIONS',
                Unit: '个',
                Desc: '连接数',
                Tags: [
                  {
                    TagName: 'Used',
                    TagInfo: '活跃连接数',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:impala_thrift_server_StatestoreService_connections_in_use,表示活动连接数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'RANGER',
    Namespace: [
      {
        Name: 'EmbeddedServer',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'RANGER.ADMIN.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'YoungGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGC一栏，表示YoungGC次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'FullGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGC一栏，表示FullGC次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.ADMIN.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'FullGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGCT一栏，表示FullGC消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'YoungGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGCT一栏，表示YoungGC消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.ADMIN.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor0区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S0一栏，表示Survivor0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令E一栏，表示Eden区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressedclassspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令CCS一栏，表示Compressedclassspace区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor1区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S1一栏，表示Survivor1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令O一栏，表示Old区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令M一栏，表示Metaspace区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.ADMIN.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM当前已经使用的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapUsedM，表示JVM当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapCommittedM，表示JVM当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM当前已经使用的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapUsedM，表示JVM当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapCommittedM，表示JVM当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM配置的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM初始HeapMem的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapInitM，表示JVM初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: 'JVM初始MemNonHeapMaxM的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapMaxM，配置的非堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'RANGER.ADMIN.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU利用率',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuLoad，CPU利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.ADMIN.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: '进程cup时间',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.ADMIN.OS.FD.COUNT',
                Unit: 'count',
                Desc: '文件句柄数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件句柄数量',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:MaxFileDescriptorCount，表示最大文件句柄数量',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已分配文件句柄数量',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:OpenFileDescriptorCount，表示已分配文件句柄数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.ADMIN.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源Runtime:Uptime，表示进程运行时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.ADMIN.TD_COUNT',
                Unit: 'count',
                Desc: '线程数',
                Tags: [
                  {
                    TagName: 'PeakThreadCount',
                    TagInfo: '峰值线程数',
                    StatisticalMethod:
                      '数据来源数据来源JMXThreading:PeckThreadCount，表示峰值线程数量',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:ThreadCount，表示线程数',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:DaemonThreadCount，表示后台线程数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'EnableUnixAuth',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'RANGER.USERSYNC.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'YoungGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGC一栏，表示YoungGC次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'FullGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGC一栏，表示FullGC次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.USERSYNC.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'FullGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGCT一栏，表示FullGC消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'YoungGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGCT一栏，表示YoungGC消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.USERSYNC.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor0区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S0一栏，表示Survivor0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令E一栏，表示Eden区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressedclassspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令CCS一栏，表示Compressedclassspace区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor1区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S1一栏，表示Survivor1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令O一栏，表示Old区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令M一栏，表示Metaspace区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.USERSYNC.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM当前已经使用的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapUsedM，表示JVM当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapCommittedM，表示JVM当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM当前已经使用的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapUsedM，表示JVM当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapCommittedM，表示JVM当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM配置的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM初始HeapMem的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapInitM，表示JVM初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: 'JVM初始MemNonHeapMaxM的数量',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapMaxM，配置的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM初始NonHeapMem的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapInitM，表示JVM初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'RANGER.USERSYNC.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU利用率',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuLoad，CPU利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.USERSYNC.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: '进程cup时间',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.USERSYNC.OS.FD.COUNT',
                Unit: 'count',
                Desc: '文件句柄数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件句柄数',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:MaxFileDescriptorCount，表示最大文件句柄数量',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已分配文件句柄数',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:OpenFileDescriptorCount，表示已分配文件句柄数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.USERSYNC.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源Runtime:Uptime，表示进程运行时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'RANGER.USERSYNC.TD_COUNT',
                Unit: 'count',
                Desc: '线程数',
                Tags: [
                  {
                    TagName: 'PeakThreadCount',
                    TagInfo: '峰值线程数',
                    StatisticalMethod:
                      '数据来源数据来源JMXThreading:PeckThreadCount，表示峰值线程数量',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:ThreadCount，表示线程数',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:DaemonThreadCount，表示后台线程数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'KYLIN',
    Namespace: [
      {
        Name: 'Kylin',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'KYLIN.KYLIN.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYLIN.KYLIN.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYLIN.KYLIN.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYLIN.KYLIN.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'KYLIN.KYLIN.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: '进程CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuLoad，表示进程CPU 利用率',
                  },
                  {
                    TagName: 'SystemCpuLoad',
                    TagInfo: '系统CPU 利用率',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:SystemCpuLoad，表示系统CPU 利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYLIN.KYLIN.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: 'CPU 累计使用时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU 累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYLIN.KYLIN.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYLIN.KYLIN.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时长',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时长',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYLIN.KYLIN.THREAD.COUNT',
                Unit: '个',
                Desc: '工作线程数',
                Tags: [
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: 'Daemon 线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:DaemonThreadCount，表示进程当前的 Daemon 线程个数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '总线程数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:ThreadCount，表示进程当前的线程个数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'OOZIE',
    Namespace: [
      {
        Name: 'Oozie',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'OOZIE.OOZIE.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'OOZIE.OOZIE.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'OOZIE.OOZIE.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'ZEPPELIN',
    Namespace: [
      {
        Name: 'Zeppelin',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'ZEPPELIN.ZEPPELIN.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZEPPELIN.ZEPPELIN.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'ZEPPELIN.ZEPPELIN.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'LIVY',
    Namespace: [
      {
        Name: 'LivyServer',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'LIVY.LIVYSERVER.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'YoungGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGC一栏，表示YoungGC次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'FullGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGC一栏，表示FullGC次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'LIVY.LIVYSERVER.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'FullGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGCT一栏，表示FullGC消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'YoungGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGCT一栏，表示YoungGC消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'LIVY.LIVYSERVER.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor0区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S0一栏，表示Survivor0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令E一栏，表示Eden区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressedclassspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令CCS一栏，表示Compressedclassspace区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor1区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S1一栏，表示Survivor1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令O一栏，表示Old区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令M一栏，表示Metaspace区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'LIVY.LIVYSERVER.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM当前已经使用的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapUsedM，表示JVM当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapCommittedM，表示JVM当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM当前已经使用的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapUsedM，表示JVM当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapCommittedM，表示JVM当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM配置的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM初始HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapInitM，表示JVM初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM初始MemNonHeap的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapInitM，表示JVM初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'LIVY.LIVYSERVER.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU利用率',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuLoad，CPU利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'LIVY.LIVYSERVER.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: '进程cup时间',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'LIVY.LIVYSERVER.OS.FD.COUNT',
                Unit: 'count',
                Desc: '文件句柄数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件句柄数',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:MaxFileDescriptorCount，表示最大文件句柄数量',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已分配文件句柄数',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:OpenFileDescriptorCount，表示已分配文件句柄数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'LIVY.LIVYSERVER.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源Runtime:Uptime，表示进程运行时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'LIVY.LIVYSERVER.THREAD.COUNT',
                Unit: 'count',
                Desc: '线程数',
                Tags: [
                  {
                    TagName: 'PeakThreadCount',
                    TagInfo: '峰值线程数',
                    StatisticalMethod:
                      '数据来源数据来源JMXThreading:PeckThreadCount，表示峰值线程数量',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:ThreadCount，表示线程数',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:DaemonThreadCount，表示后台线程数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'KYUUBI',
    Namespace: [
      {
        Name: 'KyuubiServer',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'KYUUBI.KYUUBISERVER.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'YoungGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGC一栏，表示YoungGC次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'FullGC次数',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGC一栏，表示FullGC次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'FullGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令FGCT一栏，表示FullGC消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'YoungGC消耗时间',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令YGCT一栏，表示YoungGC消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor0区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S0一栏，表示Survivor0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令E一栏，表示Eden区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressedclassspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令CCS一栏，表示Compressedclassspace区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor1区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令S1一栏，表示Survivor1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令O一栏，表示Old区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace区内存使用占比',
                    StatisticalMethod:
                      '数据来源jstat-gcutilpid命令M一栏，表示Metaspace区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM当前已经使用的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapUsedM，表示JVM当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的NonHeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapCommittedM，表示JVM当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM当前已经使用的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapUsedM，表示JVM当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM当前已经提交的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapCommittedM，表示JVM当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM配置的HeapMemory的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM初始HeapMem的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemHeapInitM，表示JVM初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapMaxM',
                    TagInfo: 'JVM初始MemNonHeapMaxM的数量',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapMaxM，配置的非堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM初始NonHeapMem的大小',
                    StatisticalMethod:
                      '数据来源JMXJvmMetrics:MemNonHeapInitM，表示JVM初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用率',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.THREAD.STATE',
                Unit: '个',
                Desc: 'JVM线程数量',
                Tags: [
                  {
                    TagName: 'ThreadsNew',
                    TagInfo: '处于 NEW 状态的线程数量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:kyuubi_thread_state_new_count，表示处于NEW状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsRunnable',
                    TagInfo: '处于 RUNNABLE 状态的线程数量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:kyuubi_thread_state_runnable_count，表示处于RUNNABLE状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsBlocked',
                    TagInfo: '处于 BLOCKED 状态的线程数量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:kyuubi_thread_state_blocked_count，表示处于BLOCKED状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsWaiting',
                    TagInfo: '处于 WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:kyuubi_thread_state_waiting_count，表示处于 WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTimedWaiting',
                    TagInfo: '处于 TIMED WAITING 状态的线程数量',
                    StatisticalMethod:
                      '数据来源metrics_prometheus:kyuubi_thread_state_timed_waiting_count，表示处于TIMED WAITING 状态的线程数量',
                  },
                  {
                    TagName: 'ThreadsTerminated',
                    TagInfo: '处于 Terminated 状态的线程数量',
                    StatisticalMethod:
                      '数据来源 metrics_prometheus:kyuubi_thread_state_terminated_count，表示处于 Terminated 状态的线程数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '操作',
            MetricMetas: [
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.FETCH.RESULT.ROWS',
                Unit: 'count/s',
                Desc: 'FetchResultRows方法调用频率',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: 'FetchResultRows方法调用频率',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_fetch_result_rows_rate_total,FetchResultRows方法调用频率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.GETCH.LOG.ROWS',
                Unit: 'count/s',
                Desc: 'FetchLogRows方法调用频率',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: 'FetchLogRows方法调用频率',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_fetch_log_rows_rate_total,FetchLogRows方法调用频率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.OPENED',
                Unit: '个',
                Desc: '当前操作数',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '当前操作数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_opened,当前操作数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.OPENED.EXECUTETATEMENT',
                Unit: '个',
                Desc: '当前Execute Statement操作数',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '当前Execute Statement操作数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_opened_ExecuteStatement,当前Execute Statement操作数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.OPENED.LAUNCHENGINE',
                Unit: '个',
                Desc: '当前Lauch Engine操作数',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '当前Lauch Engine操作数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_opened_LaunchEngine,当前Lauch Engine操作数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.STATE.CLOSED',
                Unit: 'count/s',
                Desc: '进入Closed操作状态事件频率',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '进入Closed操作状态事件频率',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_state_closed_total,进入Closed操作状态事件频率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.STATE.FINISHED',
                Unit: 'count/s',
                Desc: '进入Finished操作状态事件频率',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '进入Finished操作状态事件频率',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_state_finished_total,进入Finished操作状态事件频率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.STATE.INITIALIZED',
                Unit: 'count/s',
                Desc: '进入Initialized操作状态事件频率',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '进入Initialized操作状态频率',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_state_initialized_total,进入Initialized操作状态频率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.STATE.PENDING',
                Unit: 'count/s',
                Desc: '进入Pending操作状态事件频率',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '进入Pending操作状态事件频率',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_state_pending_total,进入Pending操作状态事件频率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OPERATION.STATE.RUNNING',
                Unit: 'count/s',
                Desc: '进入Running操作状态事件频率',
                Tags: [
                  {
                    TagName: 'Count',
                    TagInfo: '进入Running操作状态事件频率',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_operation_state_running_total,进入Running操作状态事件频率',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '服务',
            MetricMetas: [
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.CLOSE.OPERATION',
                Unit: 'ms',
                Desc: 'CloseOperation方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'CloseOperation方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_close_operation{quantile=0.5},CloseOperation方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'CloseOperation方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_operation{quantile=0.75},CloseOperation方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'CloseOperation方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_operation{quantile=0.95},CloseOperation方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'CloseOperation方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_operation{quantile=0.99},CloseOperation方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'CloseOperation方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_operation{quantile=0.999},CloseOperation方法调用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.CLOSE.SESSION',
                Unit: 'ms',
                Desc: 'CloseSession方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'CloseSession方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_close_session{quantile=0.5},CloseSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'CloseSession方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_session{quantile=0.75},CloseSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'CloseSession方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_session{quantile=0.95},CloseSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'CloseSession方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_session{quantile=0.99},CloseSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'CloseSession方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_close_session{quantile=0.999},CloseSession方法调用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.EXECUTE.STATEMENT',
                Unit: 'ms',
                Desc: 'ExecuteStatement方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'ExecuteStatement方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_execute_statement{quantile=0.5},ExecuteStatement方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'ExecuteStatement方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_execute_statement{quantile=0.75},ExecuteStatement方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'ExecuteStatement方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_execute_statement{quantile=0.95},ExecuteStatement方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'ExecuteStatement方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_execute_statement{quantile=0.99},ExecuteStatement方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'ExecuteStatement方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_execute_statement{quantile=0.999},ExecuteStatement方法调用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.FETCH.RESULTS',
                Unit: 'ms',
                Desc: 'FetchResults方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'FetchResults方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_fetch_results{quantile=0.5},FetchResults方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'FetchResults方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_fetch_results{quantile=0.75},FetchResults方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'FetchResults方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_fetch_results{quantile=0.95},FetchResults方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'FetchResults方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_fetch_results{quantile=0.99},FetchResults方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'FetchResults方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_fetch_results{quantile=0.999},FetchResults方法调用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.GET.INFO',
                Unit: 'ms',
                Desc: 'GetInfo方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'GetInfo方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_get_info{quantile=0.5},GetInfo方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'GetInfo方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_info{quantile=0.75},GetInfo方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'GetInfo方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_info{quantile=0.95},GetInfo方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'GetInfo方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_info{quantile=0.99},GetInfo方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'GetInfo方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_info{quantile=0.999},GetInfo方法调用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.GET.OPERATION.STATUS',
                Unit: 'ms',
                Desc: 'GetOperationStatus方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'GetOperationStatus方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_get_operation_status{quantile=0.5},GetOperationStatus方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'GetOperationStatus方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_operation_status{quantile=0.75},GetOperationStatus方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'GetOperationStatus方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_operation_status{quantile=0.95},GetOperationStatus方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'GetOperationStatus方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_operation_status{quantile=0.99},GetOperationStatus方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'GetOperationStatus方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_operation_status{quantile=0.999},GetOperationStatus方法调用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.GETRESULTSETMETADATA',
                Unit: 'ms',
                Desc: 'GetResultSetMetadata方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'GetResultSetMetadata方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus: kyuubi_backend_service_get_result_set_metadata{quantile=0.5},GetResultSetMetadata方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'GetResultSetMetadata方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus: kyuubi_backend_service_get_result_set_metadata{quantile=0.75},GetResultSetMetadata方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'GetResultSetMetadata方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_result_set_metadata{quantile=0.95},GetResultSetMetadata方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'GetResultSetMetadata方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_result_set_metadata{quantile=0.99},GetResultSetMetadata方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'GetResultSetMetadata方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_get_result_set_metadata{quantile=0.999},GetResultSetMetadata方法调用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.BACKEND.OPEN.SESSION',
                Unit: 'ms',
                Desc: 'OpenSession方法调用时间',
                Tags: [
                  {
                    TagName: 'Quantile_0.5',
                    TagInfo: 'OpenSession方法调用时间的50分位数',
                    StatisticalMethod:
                      '数据来源于 metrics_prometheus:kyuubi_backend_service_open_session{quantile=0.5},OpenSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.75',
                    TagInfo: 'OpenSession方法调用时间的75分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_open_session{quantile=0.75},OpenSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.95',
                    TagInfo: 'OpenSession方法调用时间的95分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_open_session{quantile=0.95},OpenSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.99',
                    TagInfo: 'OpenSession方法调用时间的99分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_open_session{quantile=0.99},OpenSession方法调用时间',
                  },
                  {
                    TagName: 'Quantile_0.999',
                    TagInfo: 'OpenSession方法调用时间的999分位数',
                    StatisticalMethod:
                      '数据来源于metrics_prometheus:kyuubi_backend_service_open_session{quantile=0.999},OpenSession方法调用时间',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'KYUUBI.KYUUBISERVER.OS.CPU.LOAD',
                Unit: '%',
                Desc: 'CPU利用率',
                Tags: [
                  {
                    TagName: 'ProcessCpuLoad',
                    TagInfo: 'CPU利用率',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuLoad，CPU利用率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OS.CPU.TIME',
                Unit: 'ms',
                Desc: 'CPU累计使用时间',
                Tags: [
                  {
                    TagName: 'ProcessCpuTime',
                    TagInfo: '进程cup时间',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:ProcessCpuTime，单位转换为毫秒，表示进程CPU累计使用时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.OS.FD.COUNT',
                Unit: 'count',
                Desc: '文件句柄数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件句柄数',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:MaxFileDescriptorCount，表示最大文件句柄数量',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已分配文件句柄数',
                    StatisticalMethod:
                      '数据来源JMXOperatingSystem:OpenFileDescriptorCount，表示已分配文件句柄数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源Runtime:Uptime，表示进程运行时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'KYUUBI.KYUUBISERVER.THREAD.COUNT',
                Unit: 'count',
                Desc: '线程数',
                Tags: [
                  {
                    TagName: 'PeakThreadCount',
                    TagInfo: '峰值线程数',
                    StatisticalMethod:
                      '数据来源数据来源JMXThreading:PeckThreadCount，表示峰值线程数量',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:ThreadCount，表示线程数',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数',
                    StatisticalMethod:
                      '数据来源JMXThreading:DaemonThreadCount，表示后台线程数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    ServiceName: 'TRINO',
    Namespace: [
      {
        Name: 'Trino-Coordinator',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'TRINO.M.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用占比',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'TRINO.M.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源 JMX Threading:ThreadCount，表示线程数量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'TRINO.M.START_TIME',
                Unit: 's',
                Desc: '进程启动时间',
                Tags: [
                  {
                    TagName: 'StartTime',
                    TagInfo: '进程启动时间',
                    StatisticalMethod:
                      '数据来源 JMX Threading:DaemonThreadCount，表示后台线程数量',
                  },
                ],
                Selected: false,
              },
              {
                Name: 'TRINO.M.THREAD.COUNT',
                Unit: '个',
                Desc: '进程数量',
                Tags: [
                  {
                    TagName: 'PeakThreadCount',
                    TagInfo: '峰值线程数',
                    StatisticalMethod:
                      '数据来源 JMX SqlTaskManager:InputDataSize.OneMinute.Rate，表示输入数据速率',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数量',
                    StatisticalMethod:
                      '数据来源 JMX SqlTaskManager:OutputDataSize.OneMinute.Rate，表示输出数据速率',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:PeakThreadCount，表示峰值线程数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: 'Trino-Worker',
        Groups: [
          {
            Title: 'JVM',
            MetricMetas: [
              {
                Name: 'TRINO.W.GC_UTIL_GC_COUNT',
                Unit: '次',
                Desc: 'GC次数',
                Tags: [
                  {
                    TagName: 'YGC',
                    TagInfo: 'Young GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGC一栏，表示Young GC 次数',
                  },
                  {
                    TagName: 'FGC',
                    TagInfo: 'Full GC 次数',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGC一栏，表示Full GC 次数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.W.GC_UTIL_GC_TIME',
                Unit: 's',
                Desc: 'GC时间',
                Tags: [
                  {
                    TagName: 'FGCT',
                    TagInfo: 'Full GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令FGCT一栏，表示Full GC 消耗时间',
                  },
                  {
                    TagName: 'GCT',
                    TagInfo: '垃圾回收时间消耗',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令GCT一栏，表示垃圾回收时间消耗',
                  },
                  {
                    TagName: 'YGCT',
                    TagInfo: 'Young GC 消耗时间',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令YGCT一栏，表示Young GC 消耗时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.W.GC_UTIL_MEMORY',
                Unit: '%',
                Desc: '内存区域占比',
                Tags: [
                  {
                    TagName: 'S0',
                    TagInfo: 'Survivor 0区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S0一栏，表示Survivor 0区内存使用占比',
                  },
                  {
                    TagName: 'E',
                    TagInfo: 'Eden 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令E一栏，表示Eden 区内存使用占比',
                  },
                  {
                    TagName: 'CCS',
                    TagInfo: 'Compressed class space 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令CCS一栏，表示Compressed class space 区内存使用占比',
                  },
                  {
                    TagName: 'S1',
                    TagInfo: 'Survivor 1区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令S1一栏，表示Survivor 1区内存使用占比',
                  },
                  {
                    TagName: 'O',
                    TagInfo: 'Old 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令O一栏，表示Old 区内存使用占比',
                  },
                  {
                    TagName: 'M',
                    TagInfo: 'Metaspace 区内存使用占比',
                    StatisticalMethod:
                      '数据来源 jstat -gcutil pid 命令M一栏，表示Metaspace 区内存使用占比',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.W.JVM.MEM',
                Unit: 'MB',
                Desc: 'JVM内存',
                Tags: [
                  {
                    TagName: 'MemNonHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapUsedM，表示JVM 当前已经使用的非堆内存',
                  },
                  {
                    TagName: 'MemNonHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 NonHeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapCommittedM，表示JVM 当前已经提交的非堆内存',
                  },
                  {
                    TagName: 'MemHeapUsedM',
                    TagInfo: 'JVM 当前已经使用的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存',
                  },
                  {
                    TagName: 'MemHeapCommittedM',
                    TagInfo: 'JVM 当前已经提交的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapCommittedM，表示JVM 当前已经提交的堆内存',
                  },
                  {
                    TagName: 'MemHeapMaxM',
                    TagInfo: 'JVM 配置的 HeapMemory 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapMaxM，表示JVM 配置的 堆内存大小',
                  },
                  {
                    TagName: 'MemHeapInitM',
                    TagInfo: 'JVM 初始 HeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapInitM，表示JVM 初始堆内存大小',
                  },
                  {
                    TagName: 'MemNonHeapInitM',
                    TagInfo: 'JVM 初始 NonHeapMem 的数量',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemNonHeapInitM，表示JVM 初始非堆内存大小',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.W.JVM.MEM.USED.RATIO',
                Unit: '%',
                Desc: '堆内存使用占比',
                Tags: [
                  {
                    TagName: 'MemHeapUsedRate',
                    TagInfo: '堆内存使用占比',
                    StatisticalMethod:
                      '数据来源 JMX JvmMetrics:MemHeapUsedM，表示JVM 当前已经使用的堆内存,JvmMetrics:MemHeapMaxM，表示JVM配置的堆内存大小',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '任务',
            MetricMetas: [
              {
                Name: 'TRINO.W.DATA_RATE',
                Unit: 'GB/min',
                Desc: '数据输入输出速率',
                Tags: [
                  {
                    TagName: 'InputDataSize.OneMinute.Rate',
                    TagInfo: '输入数据速率',
                    StatisticalMethod:
                      '数据来源 JMX SqlTaskManager:InputDataSize.OneMinute.Rate，表示输入数据速率',
                  },
                  {
                    TagName: 'OutputDataSize.OneMinute.Rate',
                    TagInfo: '输出数据速率',
                    StatisticalMethod:
                      '数据来源 JMX SqlTaskManager:OutputDataSize.OneMinute.Rate，表示输出数据速率',
                  },
                ],
                Selected: true,
              },
            ],
          },
          {
            Title: '进程',
            MetricMetas: [
              {
                Name: 'TRINO.W.OS.FD.COUNT',
                Unit: '个',
                Desc: '文件描述符数',
                Tags: [
                  {
                    TagName: 'MaxFileDescriptorCount',
                    TagInfo: '最大文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:MaxFileDescriptorCount，表示最大文件描述符数',
                  },
                  {
                    TagName: 'OpenFileDescriptorCount',
                    TagInfo: '已打开文件描述符数',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:OpenFileDescriptorCount，表示已打开文件描述符数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.W.RT.UPTIME',
                Unit: 's',
                Desc: '进程运行时间',
                Tags: [
                  {
                    TagName: 'Uptime',
                    TagInfo: '进程运行时间',
                    StatisticalMethod:
                      '数据来源 JMX OperatingSystem:Uptime，单位转换为秒，表示进程运行时长',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.W.START_TIME',
                Unit: '',
                Desc: '进程启动时间',
                Tags: [
                  {
                    TagName: 'StartTime',
                    TagInfo: '进程启动时间',
                    StatisticalMethod:
                      '数据来源 JMX Runtime:StartTime，表示进程启动时间',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.W.THREAD.COUNT',
                Unit: '个',
                Desc: '进程数量',
                Tags: [
                  {
                    TagName: 'PeakThreadCount',
                    TagInfo: '峰值线程数',
                    StatisticalMethod:
                      '数据来源 JMX Threading:PeakThreadCount，表示峰值线程数',
                  },
                  {
                    TagName: 'ThreadCount',
                    TagInfo: '线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:ThreadCount，表示线程数量',
                  },
                  {
                    TagName: 'DaemonThreadCount',
                    TagInfo: '后台线程数量',
                    StatisticalMethod:
                      '数据来源 JMX Threading:DaemonThreadCount，表示后台线程数量',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
      {
        Name: '概览',
        Groups: [
          {
            Title: '集群概要',
            MetricMetas: [
              {
                Name: 'TRINO.M.DATA_RATE',
                Unit: 'GB/min',
                Desc: '每分钟数据输入输出量',
                Tags: [
                  {
                    TagName: 'InputDataSizeOneMinute',
                    TagInfo: '输入数据速率',
                    StatisticalMethod:
                      '数据来源 JMX SqlTaskManager:InputDataSize.OneMinute.Rate，表示输入数据速率',
                  },
                  {
                    TagName: 'OutputDataSizeOneMinute',
                    TagInfo: '输出数据速率',
                    StatisticalMethod:
                      '数据来源 JMX SqlTaskManager:OutputDataSize.OneMinute.Rate，表示输出数据速率',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.NODES',
                Unit: '个',
                Desc: '节点数量',
                Tags: [
                  {
                    TagName: 'Active',
                    TagInfo: '活跃节点数量',
                    StatisticalMethod:
                      '数据来源 JMX HeartbeatFailureDetector:ActiveCount，表示活跃节点数量',
                  },
                  {
                    TagName: 'Total',
                    TagInfo: '总节点数量',
                    StatisticalMethod:
                      '数据来源 JMX HeartbeatFailureDetector:TotalCount，表示总节点数量',
                  },
                  {
                    TagName: 'Failed',
                    TagInfo: '失败节点数量',
                    StatisticalMethod:
                      '数据来源 JMX HeartbeatFailureDetector:FailedCount，表示失败节点数量',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.QUERIES',
                Unit: '个',
                Desc: '查询',
                Tags: [
                  {
                    TagName: 'RunningQueries',
                    TagInfo: '正在运行的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:RunningQueries，表示正在运行的查询总数',
                  },
                  {
                    TagName: 'QueuedQueries',
                    TagInfo: '等待状态的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:QueuedQueries，表示等待状态的查询总数',
                  },
                ],
                Selected: true,
              },
              {
                Name: 'TRINO.M.QUERIES_ONE_MINUTE',
                Unit: '个/min',
                Desc: '查询频度',
                Tags: [
                  {
                    TagName: 'FailedQueries',
                    TagInfo: '失败的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:FailedQueries.OneMinute.Count，表示失败的查询总数',
                  },
                  {
                    TagName: 'AbandonedQueries',
                    TagInfo: '放弃的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:AbandonedQueries.OneMinute.Count，表示放弃的查询总数',
                  },
                  {
                    TagName: 'CanceledQueries',
                    TagInfo: '取消的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:CanceledQueries.OneMinute.Count，表示取消的查询总数',
                  },
                  {
                    TagName: 'CompletedQueries',
                    TagInfo: '完成的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:CompletedQueries.OneMinute.Count，表示完成的查询总数',
                  },
                  {
                    TagName: 'StartedQueries',
                    TagInfo: '已启动的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:StartedQueries.OneMinute.Count，表示已启动的查询总数',
                  },
                  {
                    TagName: 'SubmittedQueries',
                    TagInfo: '已提交的查询总数',
                    StatisticalMethod:
                      '数据来源 JMX QueryManager:SubmittedQueries.OneMinute.Count，表示已提交的查询总数',
                  },
                ],
                Selected: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export function compose(...funcs) {
  return (x) => funcs.reduce((arg, fn) => fn(arg), x);
}

export const getGroups = (serviceName, nameSpaces) => {
  const { Namespace } = metaList.find(
    (item) => item.ServiceName === serviceName
  );
  const ns = nameSpaces.split('/');
  const _groupList = Namespace.filter((n) => ns.includes(n.Name)).map(
    (item) => item.Groups
  );
  return _groupList.flat();
};

export const getMetrics = (list) => {
  return list
    .map((item) => item.MetricMetas)
    .flat()
    .filter((item) => item.Selected);
};

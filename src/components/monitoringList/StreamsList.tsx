import { useTranslate } from '../../i18n/useTranslate';
import {
  MonitoringIngestStreamResponse,
  MonitoringPipelineStreamResponse
} from '../../interfaces/monitoring';
import Tooltip from '../tooltip/Tooltip';
import { MonitoringList } from './MonitoringList';
import { MonitoringListItem } from './MonitoringListItem';
import { MonitoringListTitle } from './MonitoringListTitle';

type Props = {
  ingestSide: MonitoringIngestStreamResponse;
  pipelineSide: MonitoringPipelineStreamResponse;
};
export function StreamsList({ ingestSide, pipelineSide }: Props) {
  const t = useTranslate();
  return (
    <MonitoringList showBorder={true}>
      <MonitoringListTitle title={'INGEST SIDE'}>
        <MonitoringList showBorder={false}>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.grabbed_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.grabbed_audio_frames.name'
              )}
              value={ingestSide.grabbed_audio_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.grabbed_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.grabbed_video_frames.name'
              )}
              value={ingestSide?.grabbed_video_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.dropped_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.dropped_video_frames.name'
              )}
              value={ingestSide?.dropped_video_frames.value}
              isTracked={true}
              hasError={ingestSide.dropped_video_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.video_frames_in_queue.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.video_frames_in_queue.name'
              )}
              value={ingestSide.video_frames_in_queue}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.encoded_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.encoded_audio_frames.name'
              )}
              value={ingestSide.encoded_audio_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.encoded_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.encoded_video_frames.name'
              )}
              value={ingestSide.encoded_video_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.failed_encoded_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.failed_encoded_audio_frames.name'
              )}
              value={ingestSide.failed_encoded_audio_frames.value}
              isTracked={true}
              hasError={ingestSide.failed_encoded_audio_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.failed_encoded_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.failed_encoded_video_frames.name'
              )}
              value={ingestSide.failed_encoded_video_frames.value}
              isTracked={true}
              hasError={ingestSide.failed_encoded_video_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.sent_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.sent_audio_frames.name'
              )}
              value={ingestSide.sent_audio_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.sent_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.sent_video_frames.name'
              )}
              value={ingestSide.sent_video_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.failed_sent_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.failed_sent_audio_frames.name'
              )}
              value={ingestSide.failed_sent_audio_frames.value}
              isTracked={true}
              hasError={ingestSide.failed_sent_audio_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.failed_sent_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.failed_sent_video_frames.name'
              )}
              value={ingestSide.failed_sent_video_frames.value}
              isTracked={true}
              hasError={ingestSide.failed_sent_video_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.ingest.video_kilobit_rate.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.ingest.video_kilobit_rate.name'
              )}
              value={ingestSide.video_kilobit_rate}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <MonitoringList showBorder={false}>
            {ingestSide.interfaces.map((iFace, i) => {
              return (
                <MonitoringListTitle
                  key={`${iFace.uuid}${i}`}
                  title={`Network path (${i + 1})`}
                >
                  <MonitoringList showBorder={false}>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.ingest.bandwidth_bps.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.ingest.bandwidth_bps.name'
                        )}
                        value={iFace.bandwidth_bps}
                        isTracked={false}
                        hasError={false}
                      />
                    </Tooltip>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.ingest.sent_bytes.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.ingest.sent_bytes.name'
                        )}
                        value={iFace.sent_bytes}
                        isTracked={false}
                        hasError={false}
                      />
                    </Tooltip>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.ingest.sent_packets.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.ingest.sent_packets.name'
                        )}
                        value={iFace.sent_packets}
                        isTracked={false}
                        hasError={false}
                      />
                    </Tooltip>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.ingest.retransmitted_packets.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.ingest.retransmitted_packets.name'
                        )}
                        value={iFace.retransmitted_packets.value}
                        isTracked={true}
                        hasError={iFace.retransmitted_packets.has_error}
                      />
                    </Tooltip>
                  </MonitoringList>
                </MonitoringListTitle>
              );
            })}
          </MonitoringList>
        </MonitoringList>
      </MonitoringListTitle>
      <MonitoringListTitle title={'PIPELINE SIDE'}>
        <MonitoringList showBorder={false}>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.received_broken_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.received_broken_frames.name'
              )}
              value={pipelineSide.received_broken_frames.value}
              isTracked={true}
              hasError={pipelineSide.received_broken_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.lost_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.lost_frames.name'
              )}
              value={pipelineSide.lost_frames.value}
              isTracked={true}
              hasError={pipelineSide.lost_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.received_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.received_audio_frames.name'
              )}
              value={pipelineSide.received_audio_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.received_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.received_video_frames.name'
              )}
              value={pipelineSide.received_video_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.video_frames_in_queue.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.video_frames_in_queue.name'
              )}
              value={pipelineSide.video_frames_in_queue}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.decoded_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.decoded_audio_frames.name'
              )}
              value={pipelineSide.decoded_audio_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.decoded_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.decoded_video_frames.name'
              )}
              value={pipelineSide.decoded_video_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.failed_decoded_audio_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.failed_decoded_audio_frames.name'
              )}
              value={pipelineSide.failed_decoded_audio_frames.value}
              isTracked={true}
              hasError={pipelineSide.failed_decoded_audio_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.failed_decoded_video_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.failed_decoded_video_frames.name'
              )}
              value={pipelineSide.failed_decoded_video_frames.value}
              isTracked={true}
              hasError={pipelineSide.failed_decoded_video_frames.has_error}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.delivered_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.delivered_frames.name'
              )}
              value={pipelineSide.delivered_frames}
              isTracked={false}
              hasError={false}
            />
          </Tooltip>
          <Tooltip
            description={t(
              'runtime_monitoring.streams.pipeline.dropped_frames.description'
            )}
          >
            <MonitoringListItem
              description={t(
                'runtime_monitoring.streams.pipeline.dropped_frames.name'
              )}
              value={pipelineSide.dropped_frames.value}
              isTracked={true}
              hasError={pipelineSide.dropped_frames.has_error}
            />
          </Tooltip>
          <MonitoringList showBorder={false}>
            {pipelineSide.interfaces.map((iFace, i) => {
              return (
                <MonitoringListTitle
                  key={`${iFace.uuid}${i}`}
                  title={`Network path (${i + 1})`}
                >
                  <MonitoringList showBorder={false}>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.pipeline.bandwidth_bps.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.pipeline.bandwidth_bps.name'
                        )}
                        value={iFace.bandwidth_bps}
                        isTracked={false}
                        hasError={false}
                      />
                    </Tooltip>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.pipeline.received_bytes.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.pipeline.received_bytes.name'
                        )}
                        value={iFace.received_bytes}
                        isTracked={false}
                        hasError={false}
                      />
                    </Tooltip>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.pipeline.received_packets.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.pipeline.received_packets.name'
                        )}
                        value={iFace.received_packets}
                        isTracked={false}
                        hasError={false}
                      />
                    </Tooltip>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.pipeline.lost_packets.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.pipeline.lost_packets.name'
                        )}
                        value={iFace.lost_packets.value}
                        isTracked={true}
                        hasError={iFace.lost_packets.has_error}
                      />
                    </Tooltip>
                    <Tooltip
                      description={t(
                        'runtime_monitoring.streams.pipeline.dropped_packets.description'
                      )}
                    >
                      <MonitoringListItem
                        description={t(
                          'runtime_monitoring.streams.pipeline.dropped_packets.name'
                        )}
                        value={iFace.dropped_packets.value}
                        isTracked={true}
                        hasError={iFace.dropped_packets.has_error}
                      />
                    </Tooltip>
                  </MonitoringList>
                </MonitoringListTitle>
              );
            })}
          </MonitoringList>
        </MonitoringList>
      </MonitoringListTitle>
    </MonitoringList>
  );
}

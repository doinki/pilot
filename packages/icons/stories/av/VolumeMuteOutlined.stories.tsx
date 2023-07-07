import type { Meta, StoryObj } from '@storybook/react';

import VolumeMuteOutlined from '../../lib/av/VolumeMuteOutlined';

const meta: Meta<typeof VolumeMuteOutlined> = {
  component: VolumeMuteOutlined,
  tags: ['autodocs'],
  title: 'av/VolumeMuteOutlined',
};

export default meta;
type Story = StoryObj<typeof VolumeMuteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

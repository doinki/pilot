import type { Meta, StoryObj } from '@storybook/react';

import DoNotDisturbOnTotalSilenceOutlined from '../../lib/device/DoNotDisturbOnTotalSilenceOutlined';

const meta: Meta<typeof DoNotDisturbOnTotalSilenceOutlined> = {
  component: DoNotDisturbOnTotalSilenceOutlined,
  tags: ['autodocs'],
  title: 'device/DoNotDisturbOnTotalSilenceOutlined',
};

export default meta;
type Story = StoryObj<typeof DoNotDisturbOnTotalSilenceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

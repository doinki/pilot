import type { Meta, StoryObj } from '@storybook/react';

import SimCardDownloadOutlined from '../../lib/device/SimCardDownloadOutlined';

const meta: Meta<typeof SimCardDownloadOutlined> = {
  component: SimCardDownloadOutlined,
  tags: ['autodocs'],
  title: 'device/SimCardDownloadOutlined',
};

export default meta;
type Story = StoryObj<typeof SimCardDownloadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

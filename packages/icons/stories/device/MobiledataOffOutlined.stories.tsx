import type { Meta, StoryObj } from '@storybook/react';

import MobiledataOffOutlined from '../../lib/device/MobiledataOffOutlined';

const meta: Meta<typeof MobiledataOffOutlined> = {
  component: MobiledataOffOutlined,
  tags: ['autodocs'],
  title: 'device/MobiledataOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MobiledataOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import HMobiledataOutlined from '../../lib/device/HMobiledataOutlined';

const meta: Meta<typeof HMobiledataOutlined> = {
  component: HMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/HMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof HMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

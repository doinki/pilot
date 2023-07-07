import type { Meta, StoryObj } from '@storybook/react';

import RMobiledataOutlined from '../../lib/device/RMobiledataOutlined';

const meta: Meta<typeof RMobiledataOutlined> = {
  component: RMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/RMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof RMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

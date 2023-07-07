import type { Meta, StoryObj } from '@storybook/react';

import ThreeGMobiledataOutlined from '../../lib/device/ThreeGMobiledataOutlined';

const meta: Meta<typeof ThreeGMobiledataOutlined> = {
  component: ThreeGMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/ThreeGMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof ThreeGMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import LtePlusMobiledataOutlined from '../../lib/device/LtePlusMobiledataOutlined';

const meta: Meta<typeof LtePlusMobiledataOutlined> = {
  component: LtePlusMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/LtePlusMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof LtePlusMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

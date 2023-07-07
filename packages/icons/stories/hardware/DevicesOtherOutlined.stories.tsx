import type { Meta, StoryObj } from '@storybook/react';

import DevicesOtherOutlined from '../../lib/hardware/DevicesOtherOutlined';

const meta: Meta<typeof DevicesOtherOutlined> = {
  component: DevicesOtherOutlined,
  tags: ['autodocs'],
  title: 'hardware/DevicesOtherOutlined',
};

export default meta;
type Story = StoryObj<typeof DevicesOtherOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

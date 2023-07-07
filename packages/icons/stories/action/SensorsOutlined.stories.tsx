import type { Meta, StoryObj } from '@storybook/react';

import SensorsOutlined from '../../lib/action/SensorsOutlined';

const meta: Meta<typeof SensorsOutlined> = {
  component: SensorsOutlined,
  tags: ['autodocs'],
  title: 'action/SensorsOutlined',
};

export default meta;
type Story = StoryObj<typeof SensorsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

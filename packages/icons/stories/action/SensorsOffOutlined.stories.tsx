import type { Meta, StoryObj } from '@storybook/react';

import SensorsOffOutlined from '../../lib/action/SensorsOffOutlined';

const meta: Meta<typeof SensorsOffOutlined> = {
  component: SensorsOffOutlined,
  tags: ['autodocs'],
  title: 'action/SensorsOffOutlined',
};

export default meta;
type Story = StoryObj<typeof SensorsOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

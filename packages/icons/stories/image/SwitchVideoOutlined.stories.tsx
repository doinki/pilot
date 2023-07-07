import type { Meta, StoryObj } from '@storybook/react';

import SwitchVideoOutlined from '../../lib/image/SwitchVideoOutlined';

const meta: Meta<typeof SwitchVideoOutlined> = {
  component: SwitchVideoOutlined,
  tags: ['autodocs'],
  title: 'image/SwitchVideoOutlined',
};

export default meta;
type Story = StoryObj<typeof SwitchVideoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

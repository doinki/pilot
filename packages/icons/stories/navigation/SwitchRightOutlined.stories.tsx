import type { Meta, StoryObj } from '@storybook/react';

import SwitchRightOutlined from '../../lib/navigation/SwitchRightOutlined';

const meta: Meta<typeof SwitchRightOutlined> = {
  component: SwitchRightOutlined,
  tags: ['autodocs'],
  title: 'navigation/SwitchRightOutlined',
};

export default meta;
type Story = StoryObj<typeof SwitchRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

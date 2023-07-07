import type { Meta, StoryObj } from '@storybook/react';

import SwitchLeftOutlined from '../../lib/navigation/SwitchLeftOutlined';

const meta: Meta<typeof SwitchLeftOutlined> = {
  component: SwitchLeftOutlined,
  tags: ['autodocs'],
  title: 'navigation/SwitchLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof SwitchLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

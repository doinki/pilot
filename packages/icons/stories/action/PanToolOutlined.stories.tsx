import type { Meta, StoryObj } from '@storybook/react';

import PanToolOutlined from '../../lib/action/PanToolOutlined';

const meta: Meta<typeof PanToolOutlined> = {
  component: PanToolOutlined,
  tags: ['autodocs'],
  title: 'action/PanToolOutlined',
};

export default meta;
type Story = StoryObj<typeof PanToolOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

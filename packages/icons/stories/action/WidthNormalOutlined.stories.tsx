import type { Meta, StoryObj } from '@storybook/react';

import WidthNormalOutlined from '../../lib/action/WidthNormalOutlined';

const meta: Meta<typeof WidthNormalOutlined> = {
  component: WidthNormalOutlined,
  tags: ['autodocs'],
  title: 'action/WidthNormalOutlined',
};

export default meta;
type Story = StoryObj<typeof WidthNormalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

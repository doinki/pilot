import type { Meta, StoryObj } from '@storybook/react';

import ControlPointOutlined from '../../lib/image/ControlPointOutlined';

const meta: Meta<typeof ControlPointOutlined> = {
  component: ControlPointOutlined,
  tags: ['autodocs'],
  title: 'image/ControlPointOutlined',
};

export default meta;
type Story = StoryObj<typeof ControlPointOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

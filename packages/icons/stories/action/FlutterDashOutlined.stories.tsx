import type { Meta, StoryObj } from '@storybook/react';

import FlutterDashOutlined from '../../lib/action/FlutterDashOutlined';

const meta: Meta<typeof FlutterDashOutlined> = {
  component: FlutterDashOutlined,
  tags: ['autodocs'],
  title: 'action/FlutterDashOutlined',
};

export default meta;
type Story = StoryObj<typeof FlutterDashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

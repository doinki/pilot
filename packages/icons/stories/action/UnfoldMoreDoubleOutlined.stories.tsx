import type { Meta, StoryObj } from '@storybook/react';

import UnfoldMoreDoubleOutlined from '../../lib/action/UnfoldMoreDoubleOutlined';

const meta: Meta<typeof UnfoldMoreDoubleOutlined> = {
  component: UnfoldMoreDoubleOutlined,
  tags: ['autodocs'],
  title: 'action/UnfoldMoreDoubleOutlined',
};

export default meta;
type Story = StoryObj<typeof UnfoldMoreDoubleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

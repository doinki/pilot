import type { Meta, StoryObj } from '@storybook/react';

import UnfoldMoreOutlined from '../../lib/navigation/UnfoldMoreOutlined';

const meta: Meta<typeof UnfoldMoreOutlined> = {
  component: UnfoldMoreOutlined,
  tags: ['autodocs'],
  title: 'navigation/UnfoldMoreOutlined',
};

export default meta;
type Story = StoryObj<typeof UnfoldMoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import TtyOutlined from '../../lib/places/TtyOutlined';

const meta: Meta<typeof TtyOutlined> = {
  component: TtyOutlined,
  tags: ['autodocs'],
  title: 'places/TtyOutlined',
};

export default meta;
type Story = StoryObj<typeof TtyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

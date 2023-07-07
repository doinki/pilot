import type { Meta, StoryObj } from '@storybook/react';

import Rotate90DegreesCcwOutlined from '../../lib/image/Rotate90DegreesCcwOutlined';

const meta: Meta<typeof Rotate90DegreesCcwOutlined> = {
  component: Rotate90DegreesCcwOutlined,
  tags: ['autodocs'],
  title: 'image/Rotate90DegreesCcwOutlined',
};

export default meta;
type Story = StoryObj<typeof Rotate90DegreesCcwOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
